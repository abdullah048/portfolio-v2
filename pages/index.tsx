import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import About from '../components/about'
import Header from '../components/header'
import Hero from '../components/hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-madatory overflow-scroll z-0'>
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
    </div>
  )
}

export default Home
