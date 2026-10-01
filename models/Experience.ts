export interface ExperienceEntry {
  role: string
  organisation: string
  period: string
  highlights: string[]
}

export interface EducationEntry {
  qualification: string
  institution: string
  period: string
}

export interface SkillGroup {
  label: string
  items: string[]
}