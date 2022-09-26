import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  directionLeft?: boolean
  skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        src={urlFor(skill.image).url()}
        alt=''
        className='bg-gray-300 w-16 h-16 rounded-full filter group-hover:grayscale transition duration-300 ease-in-out'
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
      />
      <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm font-bold opacity-100 text-black'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
