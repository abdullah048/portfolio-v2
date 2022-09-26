import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='w-[600px] md:w-[700px] flex flex-col items-start md:items-center justify-center rounded-lg space-y-7 flex-shrink-0 xl:w-[900px] snap-start bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        src={urlFor(experience.companyImage).url()}
        alt=''
        className='w-20 h-20 mt-10 md:mt-0 rounded-full object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-xl'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map(tech => (
            <img
              key={tech._id}
              src={urlFor(tech.image).url()}
              alt=''
              className='w-10 h-10 rounded-full'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {`${experience.dateStarted} - ${experience.dateEnded}`}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
