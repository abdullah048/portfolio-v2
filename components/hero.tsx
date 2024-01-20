import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Background from './background'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { useMediaQuery } from 'react-responsive'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
  const isTabletMobileView = useMediaQuery({
    query: '(max-width:850px)'
  })
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo.name}.`,
      'Full-Stack-Developer',
      'Guy-who-loves-Coffee.tsx'
    ],
    delaySpeed: 2000,
    loop: true
  })
  return (
    <motion.div className='h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden'>
      {!isTabletMobileView && <Background />}
      <img
        src={urlFor(pageInfo.heroImage).url()}
        alt='profile'
        className='relative rounded-full w-32 h-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-teal-700 pb-2 tracking-[6px] sm:tracking-[15px]'>
          {pageInfo.role}
        </h2>
        <h1 className='text-3xl xl:text-4xl font-semibold px-10'>
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
          <Link href='#contact'>
            <button className='heroButton'>Contact</button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
