import React from 'react'
import { motion } from 'framer-motion'
import Project from './project'

const Projects = () => {
  return (
    <motion.div
      className='h-screen flex relative flex-col items-center overlfow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto z-0'
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
      <h3 className='absolute top-24 tracking-[20px] text-center text-gray-500 text-xl uppercase'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7a]/40'>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
      <div className='w-full absolute top-[30%] bg-[#f7a]/10 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
