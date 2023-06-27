import React from 'react'
import { Skills } from './Skills'

export const SkillLanding = () => {
  return (
    <main className='min-h-screen flex flex-col justify-between'>
        <h2 className='text-5xl mb-20 md:mb-0 font-semibold text-center'>Skills</h2>
        <Skills/>
    </main>
  )
}
