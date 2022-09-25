import React from 'react'
import { motion } from 'framer-motion'

const ExperienceCard = () => {
  return (
    <article className='w-[600px] md:w-[700px] flex flex-col items-start md:items-center justify-center rounded-lg space-y-7 flex-shrink-0 xl:w-[900px] snap-start bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        src='https://img.icons8.com/office/80/000000/google-logo.png'
        alt=''
        className='w-20 h-20 mt-10 md:mt-0 rounded-full object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Full Stack Developer</h4>
        <p className='font-bold text-xl'>Google</p>
        <div className='flex space-x-2 my-2'>
          <img
            src='https://img.icons8.com/color/48/000000/javascript--v1.png'
            alt=''
            className='w-10 h-10 rounded-full'
          />
          <img
            src='https://img.icons8.com/color/48/000000/javascript--v1.png'
            alt=''
            className='w-10 h-10 rounded-full'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work - Ended work
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>
            Summery Points. This is Summery point. and this is summery points
          </li>
          <li>
            Summery Points. This is Summery point. and this is summery points
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
