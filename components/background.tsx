import React from 'react'
import { motion } from 'framer-motion'

const Background = () => {
  return (
    <motion.div
      className='relative flex justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.3, 0.4, 0.8, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{ duration: 2.5 }}
    >
      <div className='absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 ' />
      <div className='absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52 ' />
      <div className='absolute border border-[#f7a] rounded-full w-[650px] h-[650px] opacity-10 mt-52 animate-pulse' />
      <div className='absolute border border-[#333333] rounded-full mt-52 w-[800px] h-[800px]' />
    </motion.div>
  )
}

export default Background
