<script setup lang="ts">
import { RatedSkill } from '@/types'
import { technologySymbol } from '@/symbols'
import { provide } from 'vue'
import TechnologyHeader from './TechnologyHeader/TechnologyHeader.vue'
import TechnologyDetails from './TechnologyDetails/TechnologyDetails.vue'
const props = defineProps<{
  technology: RatedSkill
}>()
provide(technologySymbol, props.technology)
</script>
<template>
  <div class="technology">
    <TechnologyHeader />
    <TechnologyDetails />
  </div>
</template>
<style scoped>
.technology {
  display: flex;
  flex-direction: column;
  width: calc(50% - 22px);
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  padding-left: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

@media (max-width: 640px) {
  .technology {
    width: 100%;
    border-left: none;
    border-bottom: none;
    margin-bottom: 0;
  }
}
</style>
