import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-70 gap-20'>
        <h2 className='font-extrabold text-[60px] text-center mt-16'>
            <span className='text-[#f56551]'> Discover Your New Adventure with AI </span>
            Personalized AI planner
        </h2>
        <p className='text-xl text-gray-500 text-center'>Your Personal Trip Planner and Travel Curator , Tailored to your Interests and Budget. </p>
        <Link to={'create-trip'}>
            <Button>Get Started !!</Button>
        </Link>
        
    </div>
  )
}

export default Hero