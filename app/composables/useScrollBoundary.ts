import { readonly, type Ref, ref } from 'vue'

export const useScrollBoundary = (
  scrollBoundary: number,
): Readonly<Ref<boolean>> => {
  const isScrolled = ref(false)
  const scrollHandler = () => {
    if (window.scrollY > scrollBoundary) {
      isScrolled.value = true
    }
    isScrolled.value = false
  }
  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('unload', () => {
    window.removeEventListener('scroll', scrollHandler)
  })
  return readonly(isScrolled)
}
