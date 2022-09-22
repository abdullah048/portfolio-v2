import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Portfolio V2</title>
        <meta name='description' content='Craftzfox created Portfolio-v2' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </div>
  )
}

export default Home
