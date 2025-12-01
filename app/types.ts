import type { Moment } from 'moment'
export interface Preferences {
  expertise_scale: string
  include_contact: boolean
  target_roles: string[]
  file_name: string
}

export interface BasicsLinks {
  linkedin?: string
  github?: string
  website?: string
}

export interface Basics {
  name: string
  location: string
  remote_preference?: string
  email?: string
  phone?: string
  links?: BasicsLinks
}

// Dates in details.json use "YYYY-MM" or "Present"
export type YearMonthOrPresent = string

export interface WorkExperienceTeam {
  size?: string
  cross_functional_partners?: string[]
}

export interface WorkExperienceArchitecture {
  repos?: string
  patterns?: string[]
  rendering?: string[]
  app_type?: string
  internal_tools?: string[]
}

export interface DomainAndCompliance {
  industry?: string
  hipaa_training_completed?: boolean
  security_contributions_specific?: boolean
}

export interface WorkExperience {
  // Highest-priority fields
  title: string
  company: string
  start_date: YearMonthOrPresent
  end_date: YearMonthOrPresent
  // Common optional fields
  employment_type?: string
  location?: string
  team?: WorkExperienceTeam
  responsibilities?: string[]
  achievements?: string[]
  tech_stack?: string[] // technology names used in the role
  tools_and_platforms?: string[]
  aws_services?: string[]
  ci_cd?: string
  architecture?: WorkExperienceArchitecture
  leadership?: string[]
  notable_challenges?: string[]
  cdn_and_edge?: {
    provider?: string
    responsibilities?: string[]
  }
  domain_and_compliance?: DomainAndCompliance
}

export interface TimelineGap {
  start: YearMonthOrPresent
  end: YearMonthOrPresent
  status?: string
}

export interface EducationEntry {
  degree: string
  field: string
  institution: string
  graduation_year: number
}

// Skills and expertise ratings
export interface RatedSkill {
  name: string
  level: number // 0–10 scale per preferences
  years?: number | string // may be "<1" in source data
  last_used?: string | null
}

export interface Skills {
  technical: RatedSkill[]
  leadership_and_management: RatedSkill[]
  missing_initialized_as_zero?: boolean
}

export interface TrainingCertification {
  name: string
  issuer?: string | null
  year?: number | null
}

export interface InDemandSkill {
  name: string
  supported_by?: string[]
}

export interface ResumeDetails {
  preferences: Preferences
  basics: Basics
  professional_summary: string
  work_experience: WorkExperience[]
  timeline_gaps?: TimelineGap[]
  education: EducationEntry[]
  skills: Skills
  training_and_certifications?: TrainingCertification[]
  in_demand_skills_2025?: InDemandSkill[]
  generated_at: string
}

// Timeline types for experience visualization
export interface TimelineDatum {
  firstExperienceStartDate: Moment
  lastExperienceEndDate: Moment
  totalMonths: number
  experienceMappedToNumberOfMonths: Array<Record<string, number>>
}

export interface TimelineSegment {
  label: string
  months: number
  percent: number
  x: number
  color: string
}
