export type NavItem = {
  id: string
  label: string
}

export type ContactInfo = {
  name: string
  email: string
  tel: string
  address: string
}

export type School = {
  name: string
  location: string
  grades: string
  period: string
  address: string
  logo: string
}

export type ActivityRole = {
  title: string
  period: string
}

export type Activity = {
  title: string
  org: string
  period: string
  role: string
  roles?: ActivityRole[]
  description: string
  related?: {
    title: string
    org: string
    period: string
    role: string
    description: string
  }
  media: string[]
  layout: 'left-large' | 'right-offset' | 'full-bleed' | 'left-small' | 'text-only'
  link?: string | null
}

export type Project = {
  title: string
  period: string
  role: string
  tools: string[]
  summary: string
  media: string[]
  link: string | null
  youtubeUrl?: string
  embedUrl?: string
}

export type VolunteerItem = {
  type: string
  title: string
  org: string
  period: string
  role: string
  result: string
  media: string[]
  link: string | null
}

export type ResearchItem = {
  title: string
  institution: string
  period: string
  abstract: string
  publication: string
  link: string | null
  media: string[]
}

export type HonorItem = {
  type: string
  category: string
  title: string
  issuer: string
  date: string | null
  grade: string | null
  description?: string
  media: string[]
}

export type PortfolioData = {
  intro: {
    name: string
    tagline: string
    bio: string
    heroImage: string
  }
  about: {
    name: string
    school: string
    profileImage: string
    bio: string
    contact: ContactInfo
  }
  introVideo: {
    title: string
    youtubeUrl: string
    embedUrl: string
  }
  academics: {
    schools: School[]
  }
  activities: Activity[]
  projects: Project[]
  sportsVolunteer: VolunteerItem[]
  research: ResearchItem[]
  honors: HonorItem[]
  contact: ContactInfo
  navigation: NavItem[]
}
