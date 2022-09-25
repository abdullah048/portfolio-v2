import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='sticky top-0 flex p-5 items-start justify-between max-w-4xl mx-auto z-10 xl:items-center '>
      <motion.div
        className='flex items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }}
        transition={{
          duration: 1.1
        }}
      >
        <SocialIcon
          url='https://twitter.com/jaketrent'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://instagram.com/jaketrent'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://linkedin.com/jaketrent'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <Link href='#contact'>
        <motion.div
          className='flex items-center cursor-pointer'
          initial={{
            opacity: 0,
            scale: 0.5,
            x: 500
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.1
          }}
        >
          <SocialIcon
            network='email'
            fgColor='gray'
            bgColor='transparent'
            className='cursor-pointer'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header
