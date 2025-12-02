import { defineNuxtPlugin } from '#app'
import { useHead, useRequestEvent } from '#imports'
import { getCookie } from 'h3'

export default defineNuxtPlugin(() => {
  const event = useRequestEvent()
  const cookieTheme = event ? getCookie(event, 'theme') : undefined
  const isDark = cookieTheme === 'dark'
  console.log('isDark', isDark)
  useHead({
    bodyAttrs: {
      class: isDark ? 'dark' : undefined,
    },
  })
})