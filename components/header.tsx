import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-4xl mx-auto z-10'>
      <div className='flex items-center'>
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
      </div>
      <div className='flex items-center cursor-pointer'>
        <SocialIcon
          network='email'
          fgColor='gray'
          bgColor='transparent'
          className='cursor-pointer'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get in touch
        </p>
      </div>
    </header>
  )
}

export default Header
