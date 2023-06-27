import React from 'react'
import portfolio from '../assets/portfolio.jpg'
import githubP from '../assets/githubP.jpg'
import weather from '../assets/weather.jpg'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
export const Projects = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-around'>
        <h3 className='text-5xl font-semibold text-center'>Projects</h3>
        <motion.div transition={{duration: 1, type: "spring", staggerChildren: 1, delay: 0.5}} 
        initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}}
         className='flex justify-evenly'>
            <motion.div className='px-7 py-9 border-4 border-light rounded-lg flex flex-col justify-evenly items-center
             bg-light/10 backdrop-blur-lg'>
                <div className=' w-64 overflow-hidden'>
                    <motion.img whileHover={{scale: 1.1, }} transition={{duration: 0.3}} 
                    className='rounded-md' src={portfolio} alt="" />
                </div>
                <div className=' w-64'>
                    <h4 className='text-lg my-2'>Portfolio Website</h4>
                    <p className=' opacity-70'>
                        Created and deployed fully responsive portfolio website using React, Tailwind, Framer Motion, Three.js
                    </p>
                </div>
                <div className='w-full flex justify-between mt-4'>
                    <a className='opacity-80 hover:opacity-100' href="#"><FaGithub className='w-7 h-7'/></a>
                    <a className='opacity-80 hover:opacity-100' href="#"><FiExternalLink className='w-7 h-7'/></a>
                </div>
            </motion.div>
            <motion.div className='px-7 py-7 border-4 border-light rounded-lg flex flex-col justify-evenly items-center
             bg-light/10 backdrop-blur-lg'>
                <div className=' w-64 overflow-hidden'>
                    <motion.img whileHover={{scale: 1.1, }} transition={{duration: 0.3}} 
                    className='rounded-md overflow-hidden' src={githubP} alt="" />
                </div>
                <div className=' w-64'>
                    <h4 className='text-lg my-2'>Git Detective</h4>
                    <p className=' opacity-70'>
                        Created responsive website to find Github profiles directly from the wesite using fetchAPI
                    </p>
                </div>
                <div className='w-full flex justify-between mt-4'>
                    <a className='opacity-80 hover:opacity-100' href="#"><FaGithub className='w-7 h-7'/></a>
                    <a className='opacity-80 hover:opacity-100' href="#"><FiExternalLink className='w-7 h-7'/></a>
                </div>
            </motion.div>
            <motion.div className='px-7 py-7 border-4 border-light rounded-lg flex flex-col justify-evenly items-center
             bg-light/10 backdrop-blur-lg'>
                <div className=' w-64 overflow-hidden'>
                    <motion.img whileHover={{scale: 1.1, }} transition={{duration: 0.3}} className='rounded-md' src={weather} alt="" />
                </div>
                <div className=' w-64'>
                    <h4 className='text-lg my-2'>Weather App</h4>
                    <p className=' opacity-70'>
                        Created responsive website using HTML, Tailwind and JavaScript to fetch weather data of any city using
                        AXIOS
                    </p>
                </div>
                <div className='w-full flex justify-between mt-4'>
                    <a className='opacity-80 hover:opacity-100' href="#"><FaGithub className='w-7 h-7'/></a>
                    <a className='opacity-80 hover:opacity-100' href="#"><FiExternalLink className='w-7 h-7'/></a>
                </div>
            </motion.div>
        </motion.div>
    </main>
  )
}
