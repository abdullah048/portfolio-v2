import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-4xl px-10 mx-auto justify-evenly items-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    >
      <h3 className=' text-center absolute top-24 text-xl text-gray-500 tracking-[15px] uppercase'>
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        src='/abdullah.jpeg'
        alt='heroProfileImage'
        className='mt-20 text-center md:mb-0 flex-shrink-0 object-cover w-40 h-40 rounded-full md:rounded-lg md:w-64 md:h-64 xl:w-[350px] xl:h-[350px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h3 className='text-3xl font-semobold'>
          Here is a{' '}
          <span className='underline decoration-[#f7a]/40'>little</span>{' '}
          background
        </h3>
        <p className='text-lg text-justify'>
          I&apos;m Abdullah. I&apos;m a full stack developer based in Pakistan.
          I&apos;ve been coding for over 4 years now. I&apos;ve expert level
          skills in <span className='text-teal-700'>React</span>.
        </p>
      </div>
    </motion.div>
  )
}

export default About
