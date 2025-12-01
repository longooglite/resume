import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useResumeData } from '@/composables/useResumeData'

export const useSearchStore = defineStore('search', () => {
  const { experiences } = useResumeData()
  const search = ref('')
  const filteredExperiences = computed(() => {
    if (!search.value) return experiences.value
    return experiences.value.filter((experience) =>
      experience.tech_stack?.some((tech) =>
        tech.toLowerCase().includes(search.value.toLowerCase()),
      ),
    )
  })
  const updateSearch = (newSearch: string) => {
    search.value = newSearch
  }
  return { search, filteredExperiences, updateSearch }
})
