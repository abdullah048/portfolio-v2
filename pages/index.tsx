import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import About from '../components/about'
import ContactUs from '../components/contact-page'
import Experience from '../components/experience'
import Header from '../components/header'
import Hero from '../components/hero'
import Projects from '../components/projects'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden bg-[rgb(36,36,36)] text-white h-screen snap-y snap-madatory overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7a]/40'>
      <Head>
        <title>Portfolio V2</title>
        <meta name='description' content='Craftzfox created Portfolio-v2' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      <section id='contact' className='snap-end'>
        <ContactUs />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
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
