import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Welcome to CSE-JNU Connect</h1>
      <p className='text-lg mt-4'>A community platform for CSE-JNU students!</p>
      <Button color='#abdfed'>Click me to learn more....</Button>
    </div>
  )
}

export default Home