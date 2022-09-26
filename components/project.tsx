import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  project: Project
  i: number
  totalProjects: number
}

const Project = ({ project, i, totalProjects }: Props) => {
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
        src={urlFor(project.image).url()}
        alt=''
        className='sm:h-[200px] sm:w-[500px] md:h-[250px] md:w-[500px] xl:h-[350px] xl:w-[500px]'
      />
      <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
        <h4 className='text-2xl font-semibold text-center'>
          <span className='underline decoration-[#f7a]/20'>
            Case Study of {i + 1} of {totalProjects}:
          </span>{' '}
          {project.title}
        </h4>
        <div className='flex items-center justify-center space-x-2'>
          {project.technologies.map(tech => (
            <img
              src={urlFor(tech.image).url()}
              alt=''
              key={tech._id}
              className='w-10 h-10 rounded-full'
            />
          ))}
        </div>
        <p className='text-justify text-sm xl:text-2xl'>{project.summery}</p>
      </div>
    </motion.div>
  )
}

export default Project
