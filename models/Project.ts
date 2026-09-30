export type ProjectCategory = 'Web development' | 'UX design'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  image: string
  imageAlt: string
  href?: string
}