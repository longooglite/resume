import { computed, readonly, ref } from 'vue'
import data from '../../details.json'
import type { ResumeDetails, WorkExperience, RatedSkill } from '@/types'

/**
 * useResumeData
 * - Wraps details.json in a typed, read-only ref
 * - Exposes common slices (experiences, skills, education)
 * - Provides a few selectors for timelines, current role, and skills
 */
export const useResumeData = () => {
  // Base, typed dataset
  const resume = ref(data as ResumeDetails)

  // Convenience slices
  const experiences = computed<WorkExperience[]>(
    () => resume.value.work_experience ?? [],
  )
  const education = computed(() => resume.value.education ?? [])
  const technicalSkills = computed<RatedSkill[]>(
    () => resume.value.skills?.technical ?? [],
  )
  const leadershipSkills = computed<RatedSkill[]>(
    () => resume.value.skills?.leadership_and_management ?? [],
  )

  // Helpers
  const toDate = (ymOrPresent: string): Date => {
    if (ymOrPresent.toLowerCase?.() === 'present') return new Date()
    // Expecting YYYY or YYYY-MM; default to first day if needed
    const iso = /^\d{4}-\d{2}$/.test(ymOrPresent)
      ? `${ymOrPresent}-01`
      : `${ymOrPresent}-01-01`
    return new Date(iso)
  }

  // Derived: experiences sorted by most recent end_date, then start_date
  const experiencesSorted = computed<WorkExperience[]>(() => {
    return [...experiences.value].sort((a, b) => {
      const aEnd = toDate(a.end_date).getTime()
      const bEnd = toDate(b.end_date).getTime()
      if (aEnd !== bEnd) return bEnd - aEnd
      return toDate(b.start_date).getTime() - toDate(a.start_date).getTime()
    })
  })

  // Derived: current role (first with `end_date === "Present"`, fallback to most recent)
  const currentRole = computed<WorkExperience | undefined>(() => {
    return (
      experiences.value.find((e) => e.end_date.toLowerCase?.() === 'present') ??
      experiencesSorted.value[0]
    )
  })

  // Derived: timeline items for charting (range style: [start, end] timestamps)
  const experienceTimeline = computed(() => {
    return experiences.value.map((e) => ({
      label: `${e.company} — ${e.title}`,
      company: e.company,
      title: e.title,
      range: [toDate(e.start_date).getTime(), toDate(e.end_date).getTime()],
    }))
  })

  // Selectors
  const getExperienceByCompany = (company: string) =>
    experiences.value.filter(
      (e) => e.company.toLowerCase() === company.toLowerCase(),
    )

  const getSkillsByMinLevel = (minLevel: number) =>
    technicalSkills.value.filter((s) => (s.level ?? 0) >= minLevel)

  const getSkillLevel = (name: string) =>
    technicalSkills.value.find(
      (s) => s.name.toLowerCase() === name.toLowerCase(),
    )?.level

  const companies = computed(() =>
    Array.from(new Set(experiences.value.map((e) => e.company))),
  )

  return {
    // base
    resume: readonly(resume),

    // slices
    experiences,
    experiencesSorted,
    education,
    technicalSkills,
    leadershipSkills,

    // derived
    currentRole,
    experienceTimeline,
    companies,

    // selectors
    getExperienceByCompany,
    getSkillsByMinLevel,
    getSkillLevel,
  }
}
