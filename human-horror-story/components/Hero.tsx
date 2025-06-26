import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 h-screen relative' id='hero'>
      <div className='absolute inset-0'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12'>
        <img 
          src='/assets/hhs-logo.png' 
          alt='HumanHorrorStory Logo'
          className='w-44 h-44 object-cover rounded-full border-2 border-purple-500 mb-6'
        />

        <p className='text-xl font-medium opacity-80'>
          A Platform for Awareness and Remembrance
        </p>

        <h1 className='text-4xl font-bold mt-6 mb-4 md:text-5xl md:leading-tight'>
          Visualizing the Scale of Human Tragedies — One Life at a Time
        </h1>

        <TextGenerateEffect 
          className='text-lg mt-6 opacity-90 max-w-3xl'
          words='HumanHorrorStory is a digital monument. Through respectful animations and real data, we show how many people were lost in the darkest chapters of history — to inform, to remember, and to inspire action.'
        />

        <p className='mt-8 text-sm text-gray-300 max-w-xl italic'>
          ⚠️ Please treat everything shown on this platform with the utmost <strong>respect</strong> and <strong>reverence</strong>. These are not just numbers — they are human lives, lost to tragedy.
        </p>

        <p className="mt-6 text-sm text-gray-300 max-w-xl italic">
          Each tragedy represented here carries its own unique suffering and pain, impossible to fully capture in numbers alone.<br />
          This site does not aim to compare or diminish any of these events — only to show their immense scale, so we never forget the lives lost and the horrors endured.<br />
          We honor all victims with deepest respect and acknowledge the countless untold stories behind every number.
        </p>
      </div>
    </div>
  )
}

export default Hero
