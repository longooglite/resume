import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<
  {},
  { refresh: () => Promise<void> },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  SlotsType<{ fallback: { error: unknown } }>
> &
  T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?:
    | keyof HTMLElementEventMap
    | Array<keyof HTMLElementEventMap>
    | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<
  HydrationStrategies,
  {},
  {},
  {},
  {},
  {},
  {},
  { hydrated: () => void }
> &
  T

export const TechSearch: (typeof import('../app/components/TechSearch/TechSearch.vue'))['default']
export const TheExperienceExperienceBlock: (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceBlock.vue'))['default']
export const TheExperienceExperienceBlockExperienceDetails: (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceDetails/ExperienceDetails.vue'))['default']
export const TheExperienceExperienceBlockExperienceHeader: (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceHeader.vue'))['default']
export const TheExperienceExperienceBlockExperienceHeaderExperienceSubtitle: (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceSubtitle/ExperienceSubtitle.vue'))['default']
export const TheExperienceExperienceBlockExperienceHeaderExperienceTitle: (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceTitle/ExperienceTitle.vue'))['default']
export const TheExperienceExperienceTimeline: (typeof import('../app/components/TheExperience/ExperienceTimeline/ExperienceTimeline.vue'))['default']
export const TheExperienceExperienceTimelineExperienceTimelineRect: (typeof import('../app/components/TheExperience/ExperienceTimeline/ExperienceTimelineRect/ExperienceTimelineRect.vue'))['default']
export const TheExperience: (typeof import('../app/components/TheExperience/TheExperience.vue'))['default']
export const TheHeader: (typeof import('../app/components/TheHeader/TheHeader.vue'))['default']
export const TheHero: (typeof import('../app/components/TheHero/TheHero.vue'))['default']
export const TheSummary: (typeof import('../app/components/TheSummary/TheSummary.vue'))['default']
export const TheTechnologies: (typeof import('../app/components/TheTechnologies/TheTechnologies.vue'))['default']
export const TheTooltip: (typeof import('../app/components/TheTooltip/TheTooltip.vue'))['default']
export const NuxtWelcome: (typeof import('../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
export const NuxtLayout: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
export const NuxtErrorBoundary: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue'))['default']
export const ClientOnly: (typeof import('../node_modules/nuxt/dist/app/components/client-only'))['default']
export const DevOnly: (typeof import('../node_modules/nuxt/dist/app/components/dev-only'))['default']
export const ServerPlaceholder: (typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
export const NuxtLink: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
export const NuxtLoadingIndicator: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
export const NuxtTime: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-time.vue'))['default']
export const NuxtRouteAnnouncer: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
export const NuxtImg: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtImg']
export const NuxtPicture: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtPicture']
export const NuxtPage: (typeof import('../node_modules/nuxt/dist/pages/runtime/page'))['default']
export const NoScript: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
export const Link: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Link']
export const Base: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Base']
export const Title: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Title']
export const Meta: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Meta']
export const Style: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Style']
export const Head: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Head']
export const Html: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Html']
export const Body: (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Body']
export const NuxtIsland: (typeof import('../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
export const LazyTechSearch: LazyComponent<
  (typeof import('../app/components/TechSearch/TechSearch.vue'))['default']
>
export const LazyTheExperienceExperienceBlock: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceBlock.vue'))['default']
>
export const LazyTheExperienceExperienceBlockExperienceDetails: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceDetails/ExperienceDetails.vue'))['default']
>
export const LazyTheExperienceExperienceBlockExperienceHeader: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceHeader.vue'))['default']
>
export const LazyTheExperienceExperienceBlockExperienceHeaderExperienceSubtitle: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceSubtitle/ExperienceSubtitle.vue'))['default']
>
export const LazyTheExperienceExperienceBlockExperienceHeaderExperienceTitle: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceTitle/ExperienceTitle.vue'))['default']
>
export const LazyTheExperienceExperienceTimeline: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceTimeline/ExperienceTimeline.vue'))['default']
>
export const LazyTheExperienceExperienceTimelineExperienceTimelineRect: LazyComponent<
  (typeof import('../app/components/TheExperience/ExperienceTimeline/ExperienceTimelineRect/ExperienceTimelineRect.vue'))['default']
>
export const LazyTheExperience: LazyComponent<
  (typeof import('../app/components/TheExperience/TheExperience.vue'))['default']
>
export const LazyTheHeader: LazyComponent<
  (typeof import('../app/components/TheHeader/TheHeader.vue'))['default']
>
export const LazyTheHero: LazyComponent<
  (typeof import('../app/components/TheHero/TheHero.vue'))['default']
>
export const LazyTheSummary: LazyComponent<
  (typeof import('../app/components/TheSummary/TheSummary.vue'))['default']
>
export const LazyTheTechnologies: LazyComponent<
  (typeof import('../app/components/TheTechnologies/TheTechnologies.vue'))['default']
>
export const LazyTheTooltip: LazyComponent<
  (typeof import('../app/components/TheTooltip/TheTooltip.vue'))['default']
>
export const LazyNuxtWelcome: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
>
export const LazyNuxtLayout: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
>
export const LazyNuxtErrorBoundary: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue'))['default']
>
export const LazyClientOnly: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/client-only'))['default']
>
export const LazyDevOnly: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/dev-only'))['default']
>
export const LazyServerPlaceholder: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
>
export const LazyNuxtLink: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
>
export const LazyNuxtLoadingIndicator: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
>
export const LazyNuxtTime: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-time.vue'))['default']
>
export const LazyNuxtRouteAnnouncer: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
>
export const LazyNuxtImg: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtImg']
>
export const LazyNuxtPicture: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtPicture']
>
export const LazyNuxtPage: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/pages/runtime/page'))['default']
>
export const LazyNoScript: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
>
export const LazyLink: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Link']
>
export const LazyBase: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Base']
>
export const LazyTitle: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Title']
>
export const LazyMeta: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Meta']
>
export const LazyStyle: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Style']
>
export const LazyHead: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Head']
>
export const LazyHtml: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Html']
>
export const LazyBody: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/head/runtime/components'))['Body']
>
export const LazyNuxtIsland: LazyComponent<
  (typeof import('../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
>

export const componentNames: string[]
