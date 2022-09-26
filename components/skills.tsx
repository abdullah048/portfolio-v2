import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './skill'
import { Skill } from '../typings'

type Props = {
  skills: Skill[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      className='h-screen flex items-center md:text-left relative flex-col xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
    >
      <h3 className='absolute top-24 tracking-[20px] text-center text-gray-500 text-xl uppercase'>
        Skills
      </h3>
      <h3 className='top-36 tracking-[3px] uppercase text-sm text-gray-500 absolute text-center'>
        Hover over a skill for currency proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills.slice(0, skills.length / 2).map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map(skill => (
          <SkillCard key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
