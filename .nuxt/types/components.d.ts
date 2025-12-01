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

interface _GlobalComponents {
  TechSearch: (typeof import('../../app/components/TechSearch/TechSearch.vue'))['default']
  TheExperienceExperienceBlock: (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceBlock.vue'))['default']
  TheExperienceExperienceBlockExperienceDetails: (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceDetails/ExperienceDetails.vue'))['default']
  TheExperienceExperienceBlockExperienceHeader: (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceHeader.vue'))['default']
  TheExperienceExperienceBlockExperienceHeaderExperienceSubtitle: (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceSubtitle/ExperienceSubtitle.vue'))['default']
  TheExperienceExperienceBlockExperienceHeaderExperienceTitle: (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceTitle/ExperienceTitle.vue'))['default']
  TheExperienceExperienceTimeline: (typeof import('../../app/components/TheExperience/ExperienceTimeline/ExperienceTimeline.vue'))['default']
  TheExperienceExperienceTimelineExperienceTimelineRect: (typeof import('../../app/components/TheExperience/ExperienceTimeline/ExperienceTimelineRect/ExperienceTimelineRect.vue'))['default']
  TheExperience: (typeof import('../../app/components/TheExperience/TheExperience.vue'))['default']
  TheHeader: (typeof import('../../app/components/TheHeader/TheHeader.vue'))['default']
  TheHero: (typeof import('../../app/components/TheHero/TheHero.vue'))['default']
  TheSummary: (typeof import('../../app/components/TheSummary/TheSummary.vue'))['default']
  TheTechnologies: (typeof import('../../app/components/TheTechnologies/TheTechnologies.vue'))['default']
  TheTooltip: (typeof import('../../app/components/TheTooltip/TheTooltip.vue'))['default']
  NuxtWelcome: (typeof import('../../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
  NuxtLayout: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
  NuxtErrorBoundary: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue'))['default']
  ClientOnly: (typeof import('../../node_modules/nuxt/dist/app/components/client-only'))['default']
  DevOnly: (typeof import('../../node_modules/nuxt/dist/app/components/dev-only'))['default']
  ServerPlaceholder: (typeof import('../../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
  NuxtLink: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
  NuxtLoadingIndicator: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
  NuxtTime: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-time.vue'))['default']
  NuxtRouteAnnouncer: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
  NuxtImg: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtImg']
  NuxtPicture: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtPicture']
  NuxtPage: (typeof import('../../node_modules/nuxt/dist/pages/runtime/page'))['default']
  NoScript: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
  Link: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Link']
  Base: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Base']
  Title: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Title']
  Meta: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Meta']
  Style: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Style']
  Head: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Head']
  Html: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Html']
  Body: (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Body']
  NuxtIsland: (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
  LazyTechSearch: LazyComponent<
    (typeof import('../../app/components/TechSearch/TechSearch.vue'))['default']
  >
  LazyTheExperienceExperienceBlock: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceBlock.vue'))['default']
  >
  LazyTheExperienceExperienceBlockExperienceDetails: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceDetails/ExperienceDetails.vue'))['default']
  >
  LazyTheExperienceExperienceBlockExperienceHeader: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceHeader.vue'))['default']
  >
  LazyTheExperienceExperienceBlockExperienceHeaderExperienceSubtitle: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceSubtitle/ExperienceSubtitle.vue'))['default']
  >
  LazyTheExperienceExperienceBlockExperienceHeaderExperienceTitle: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceBlock/ExperienceHeader/ExperienceTitle/ExperienceTitle.vue'))['default']
  >
  LazyTheExperienceExperienceTimeline: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceTimeline/ExperienceTimeline.vue'))['default']
  >
  LazyTheExperienceExperienceTimelineExperienceTimelineRect: LazyComponent<
    (typeof import('../../app/components/TheExperience/ExperienceTimeline/ExperienceTimelineRect/ExperienceTimelineRect.vue'))['default']
  >
  LazyTheExperience: LazyComponent<
    (typeof import('../../app/components/TheExperience/TheExperience.vue'))['default']
  >
  LazyTheHeader: LazyComponent<
    (typeof import('../../app/components/TheHeader/TheHeader.vue'))['default']
  >
  LazyTheHero: LazyComponent<
    (typeof import('../../app/components/TheHero/TheHero.vue'))['default']
  >
  LazyTheSummary: LazyComponent<
    (typeof import('../../app/components/TheSummary/TheSummary.vue'))['default']
  >
  LazyTheTechnologies: LazyComponent<
    (typeof import('../../app/components/TheTechnologies/TheTechnologies.vue'))['default']
  >
  LazyTheTooltip: LazyComponent<
    (typeof import('../../app/components/TheTooltip/TheTooltip.vue'))['default']
  >
  LazyNuxtWelcome: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/welcome.vue'))['default']
  >
  LazyNuxtLayout: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-layout'))['default']
  >
  LazyNuxtErrorBoundary: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue'))['default']
  >
  LazyClientOnly: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/client-only'))['default']
  >
  LazyDevOnly: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/dev-only'))['default']
  >
  LazyServerPlaceholder: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/server-placeholder'))['default']
  >
  LazyNuxtLink: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-link'))['default']
  >
  LazyNuxtLoadingIndicator: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator'))['default']
  >
  LazyNuxtTime: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-time.vue'))['default']
  >
  LazyNuxtRouteAnnouncer: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-route-announcer'))['default']
  >
  LazyNuxtImg: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtImg']
  >
  LazyNuxtPicture: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-stubs'))['NuxtPicture']
  >
  LazyNuxtPage: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/pages/runtime/page'))['default']
  >
  LazyNoScript: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['NoScript']
  >
  LazyLink: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Link']
  >
  LazyBase: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Base']
  >
  LazyTitle: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Title']
  >
  LazyMeta: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Meta']
  >
  LazyStyle: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Style']
  >
  LazyHead: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Head']
  >
  LazyHtml: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Html']
  >
  LazyBody: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/head/runtime/components'))['Body']
  >
  LazyNuxtIsland: LazyComponent<
    (typeof import('../../node_modules/nuxt/dist/app/components/nuxt-island'))['default']
  >
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents {}
}

export {}
