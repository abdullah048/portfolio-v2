import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactUs = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    window.location.href = `mailto:abdullahshahbaz048@gmail.com?subject=${data.subject}&body=${data.message}`
  }
  return (
    <motion.div
      className='h-screen flex flex-col relative items-center text-center md:flex-row max-w-4xl mx-auto justify-evenly px-10'
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
        Contact
      </h3>
      <div className='flex mt-32 items-center justify-center flex-col space-y-10 md:mx-auto'>
        <h4 className='text-2xl font-thin xl:font-3xl'>
          I have got just what you need.{' '}
          <span className='underline decoration-[#f7a]/20'>
            Let&apos;s talk.
          </span>
        </h4>
        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7a]/40 h-7 w-7 animate-pulse' />
            <p className='text-xl font-light'>+923077750051</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7a]/40 h-7 w-7 animate-pulse' />
            <p className='text-xl font-light'>abdullahshahbaz048@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7a]/40 h-7 w-7 animate-pulse' />
            <p className='text-xl font-light'>123 Developer Lane</p>
          </div>
        </div>
        <form
          className='flex flex-col space-y-2 w-fit mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex space-x-2'>
            <input
              className='contactInput'
              placeholder='Name'
              {...register('name')}
            />

            <input
              className='contactInput'
              placeholder='Email'
              type='email'
              {...register('email')}
            />
          </div>
          <input
            className='contactInput'
            placeholder='Subject'
            {...register('subject')}
          />
          <textarea
            className='contactInput'
            placeholder='Message'
            {...register('message')}
          />
          <button className='heroButton'>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactUs
