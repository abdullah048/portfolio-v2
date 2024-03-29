import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import About from '../components/about'
import ContactUs from '../components/contact-page'
import WorkExperience from '../components/experience'
import Header from '../components/header'
import Hero from '../components/hero'
import Projects from '../components/projects'
import Skills from '../components/skills'
import { sanityClient } from '../sanity'
import { Experience, PageInfo, Project, Skill, Socials } from '../typings'

type Props = {
  pageInfo: PageInfo
  experience: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Socials[]
}

const Home = ({ pageInfo, experience, skills, projects, socials }: Props) => {
  return (
    <div className='overflow-x-hidden bg-[rgb(36,36,36)] text-white h-screen snap-y snap-madatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7a]/40'>
      <Head>
        <title>Portfolio V2</title>
        <meta name='description' content='Craftzfox created Portfolio-v2' />
      </Head>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experience} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      <section id='projects' className='snap-center'>
        <Projects projects={projects} />
      </section>
      <section id='contact' className='snap-end'>
        <ContactUs pageInfo={pageInfo} />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-start pl-5 z-0'>
            <img
              src='/abdullah.jpeg'
              alt=''
              className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfoQuery = `
*[_type == 'pageInfo'][0] {
  ...,
  socials[]->
}`
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery)

  const experienceQuery = `
*[_type == 'experience'] {
  ...,
  technologies[]->
}`

  const experience: Experience[] = await sanityClient.fetch(experienceQuery)
  const skillsQuery = `
*[_type == 'skill']
`
  const skills: Skill[] = await sanityClient.fetch(skillsQuery)
  const projectsQuery = `
*[_type == 'project'] {
  ...,
  technologies[]->
}`
  const projects: Project[] = await sanityClient.fetch(projectsQuery)

  const socialsQuery = `
*[_type == 'social']
`

  const socials: Socials[] = await sanityClient.fetch(socialsQuery)

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials
    },
    // revalidate: 1800
    revalidate: false
  }
}
