import { motion, useScroll } from 'framer-motion'
import React from 'react'

export const AnimateSvg = ({reference}) => {
    const {scrollYProgress} = useScroll(
        {
        target: reference,
        offset: ["center end", "center center"]
        }
    )
  return (
    <figure className=' -rotate-90 left-[31.3%] stroke-[#f5f5f5] absolute'>
        <svg width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="75" cy="50" r="20" className='stroke-primaryDark stroke-1 fill-none' />
            <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-dark' 
            style={{
                pathLength: scrollYProgress
            }}/>
            <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-primaryDark' />
        </svg>
    </figure>
  )
}
