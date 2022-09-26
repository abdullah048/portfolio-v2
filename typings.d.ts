interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Socials extends SanityBody {
  _type: 'social'
  title: string
  url: string
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo'
  address: string
  backgroundInformation: string
  email: string
  heroImage: Image
  name: string
  phoneNo: string
  role: string
  profileImage: Image
  socials: Socials[]
}

export interface Technology extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Skill extends SanityBody {
  _type: 'skill'
  image: Image
  progress: number
  title: string
}

export interface Project extends SanityBody {
  _type: 'project'
  image: Image
  linkToBuild: string
  summery: string
  technologies: Technology[]
  title: string
}

export interface Experience extends SanityBody {
  _type: 'experience'
  company: string
  companyImage: Image
  dateEnded: Date
  dateStarted: Date
  jobTitle: string
  points: string[]
  technologies: Technology[]
}
