import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        src='/sanity.jfif'
        alt=''
        className='bg-gray-300 w-16 h-16 rounded-full filter group-hover:grayscale transition duration-300 ease-in-out'
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.5
        }}
      />
      <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm font-bold opacity-100 text-black'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill
