import React from 'react'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <motion.div
      className='mt-10 md:mt-32 lg:mt-0 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
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
      <motion.img
        initial={{
          y: -300,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
        viewport={{
          once: true
        }}
        src='https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png'
        alt=''
        className='sm:h-[200px] sm:w-[500px] md:h-[250px] md:w-[500px] xl:h-[350px] xl:w-[500px]'
      />
      <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
        <h4 className='text-2xl font-semibold text-center'>
          <span className='underline decoration-[#f7a]/20'>
            Case Study of 1 of 3:
          </span>{' '}
          Netflix Clone
        </h4>
        <p className='text-justify text-sm xl:text-2xl'>
          Netflix 2.0 that has login and logout Authentication with google. It
          has beautiful home screen with all the movies looking just like
          netflix
        </p>
      </div>
    </motion.div>
  )
}

export default Project
