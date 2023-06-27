import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import { AnimateSvg } from './AnimateSvg'



const Details = ({gpa, degree, name, year, location})=>{
    const ref = useRef(null)
    return(
        <div ref={ref} className='mb-10'>
        <AnimateSvg reference={ref}/>
            <motion.div transition={{duration: 0.8, type: "spring"}} initial={{y:50, opacity:0 }} whileInView={{y:0, opacity: 1}} >
                <h3 className='font-bold text-md md:text-2xl'>{degree} 
                    <span className='text-primaryDark'>{name}</span>
                </h3>
                <span className='text-sm md:text-lg text-light/75 '>{year}&nbsp; |&nbsp; </span>
                <span className='text-sm md:text-lg text-light/75 '>{location}</span>
                <p className='font-semibold text-lg md:text-xl'>CGPA: {gpa}</p>
            </motion.div>
        </div>
    )
}

export const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
  return (
    <main id='About' className=' h-screen flex flex-col justify-evenly'>
        {/* <StarsCanvas1/> */}
        <div className=''>
            <div><h2 className='text-4xl font-semibold mb-20 text-center'>Education</h2></div>
            <div className='relative w-full' ref={ref}>
                <motion.div style={{scaleY: scrollYProgress}}  className='absolute left-12 md:left-1/3 h-[90%] w-[4px] bg-primaryDark origin-top'/>

                <ul className='flex flex-col text-light items-center justify-evenly ml-8'>
                    <div>
                        <Details name="@JGEC" degree="B.Tech" year="2021-2025" location="Jalpaiguri, India" 
                        gpa="8.1(Till 3rd sem)" />
                        <Details name="@SGHS" degree="Higher Secondary" year="2019-2021" location="Cooch Behar, India" gpa="8.8" />
                        <Details name="@SGHS" degree="Secondary" year="2017-2019" location="Cooch Behar, India" gpa="9.0" />
                    </div>
                    
                </ul>
                
            </div>
        </div>
    </main>
  )
}
