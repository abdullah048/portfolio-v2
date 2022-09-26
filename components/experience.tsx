import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experience-card'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

const Experience = ({ experiences }: Props) => {
  return (
    <motion.div
      className='h-screen relative flex flex-col text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center'
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
      <h3 className=' text-center absolute top-24 md:top-10 text-xl text-gray-500 tracking-[15px] uppercase'>
        Experience
      </h3>
      <div className='w-full h-screen mt-36 overflow-x-scroll flex space-x-5 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7a]/30'>
        {experiences.map(experience => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
