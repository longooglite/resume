import { ref } from 'vue'
import { useCookie } from 'nuxt/app'
import type { Theme } from '@/types'

export const useTheme = () => {
  const themeCookie = useCookie<Theme>('theme')
  const theme = ref<Theme>(
    import.meta.server
      ? (themeCookie.value ?? 'dark')
      : (themeCookie.value
         ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  )

  const apply = (t: Theme) => {
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', t === 'dark')
      document.body.classList.toggle('dark', t === 'dark')
      document.documentElement.classList.toggle('light', t === 'light')
      document.body.classList.toggle('light', t === 'light')
      localStorage.setItem('theme', t)
    }
    themeCookie.value = t
  }

  if (import.meta.client) apply(theme.value)

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    apply(theme.value)
  }

  return { theme, toggleTheme }
}