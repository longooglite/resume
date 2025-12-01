<script setup lang="ts">
import { computed, ref } from 'vue'
import ExperienceTimelineRect from '@/components/TheExperience/ExperienceTimeline/ExperienceTimelineRect/ExperienceTimelineRect.vue'
import TheTooltip from '@/components/TheTooltip/TheTooltip.vue'
import { monthsToYearsAndMonths } from '@/utils/time/monthsToYearsAndMonths'
import type { TimelineDatum, TimelineSegment } from '@/types'
import { palette, MAX_APP_WIDTH } from '@/utils/styles'

const props = defineProps<{ timelineData: TimelineDatum }>()

const segments = computed<TimelineSegment[]>(() => {
  const total = props.timelineData.totalMonths || 1
  let cursor = 0
  return props.timelineData.experienceMappedToNumberOfMonths.map(
    (entry, idx) => {
      const label = Object.keys(entry)[0]
      const months = entry[label] ?? 0
      const percent = Math.max(0, (months / total) * MAX_APP_WIDTH)
      const seg: TimelineSegment = {
        label,
        months,
        percent,
        x: cursor,
        color: palette[idx % palette.length],
      }
      cursor += percent
      return seg
    },
  )
})
const hoveredIndex = ref<number | null>(null)
const hoveredSegment = computed(() => {
  return segments.value[hoveredIndex.value ?? -1]
})
const tooltipBorderStyle = computed(() => {
  return {
    borderBottom:
      hoveredIndex.value !== null
        ? `4px solid ${hoveredSegment.value?.color}`
        : 'none',
  }
})
</script>

<template>
  <TheTooltip v-if="hoveredIndex !== null">
    <div class="tooltip-content" :style="tooltipBorderStyle">
      <span class="tooltip-content-label">{{
        segments[hoveredIndex].label
      }}</span>
      <span class="tooltip-content-duration">{{
        monthsToYearsAndMonths(segments[hoveredIndex].months)
      }}</span>
    </div>
  </TheTooltip>
  <div class="experience-timeline" :style="{ maxWidth: `${MAX_APP_WIDTH}px` }">
    <span class="beginning-date">{{
      timelineData.firstExperienceStartDate.format('MMM YYYY')
    }}</span>
    <svg :viewBox="`0 0 ${MAX_APP_WIDTH} 16`" class="timeline-svg">
      <rect x="0" y="0" height="16" />
      <g
        v-for="(seg, index) in segments"
        :key="seg.label"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <ExperienceTimelineRect
          :x="seg.x"
          :width="seg.percent"
          :color="seg.color"
          :label="seg.label"
        />
      </g>
    </svg>
    <span class="ending-date">{{
      timelineData.lastExperienceEndDate.format('MMM YYYY')
    }}</span>
  </div>
</template>

<style scoped>
.experience-timeline {
  width: var(--app-max-width);
  margin: 0 auto;
  position: relative;
}
.timeline-svg {
  width: 100%;
  height: 36px;
  display: block;
  cursor: pointer;
}
.beginning-date {
  position: absolute;
  left: 0;
  top: -10px;
}
.ending-date {
  position: absolute;
  right: 0;
  top: -10px;
}
.tooltip-content {
  background-color: var(--app-bg);
  padding: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.tooltip-content-label {
  font-weight: bold;
  display: block;
}
.tooltip-content-duration {
  font-size: 12px;
  display: block;
}
</style>
