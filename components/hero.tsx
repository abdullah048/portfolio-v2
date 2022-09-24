import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Background from './background'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's Abdullah Shahbaz.`,
      'Guy-who-loves-Coffee.tsx',
      'Full-Stack-Developer'
    ],
    delaySpeed: 2000,
    loop: true
  })
  return (
    <motion.div className='h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden'>
      <Background />
      <img
        src='/abdullah.jpeg'
        alt='profile'
        className='relative rounded-full w-32 h-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-teal-700 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl xl:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7a' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
