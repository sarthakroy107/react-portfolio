import React from 'react'
import{AiFillTwitterSquare, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsLinkedin, BsInstagram, BsFillHeartFill} from 'react-icons/bs'
const Footer = () => {
  return (
    <main className='h-[15vh] flex items-center text-light/75 bg-dark border-t-2 border-white'>
        <div className='flex w-full justify-around items-center'>
            <div className='flex'>
                <span><AiOutlineCopyrightCircle className='text-xl text-white'/>
                </span>&nbsp;<p className='text-lg'>2023</p>
            </div>
            <div className='flex text-xl'>
                Build with &nbsp;<span className='text-red-400'><BsFillHeartFill/></span>&nbsp; by Sarthak Roy
            </div>
            <div className='flex gap-4 items-centers'>
                <div><BsLinkedin className='text-2xl hover:opacity-100 hover:scale-110 duration-150
                opacity-75 hover:text-white'/></div>
                <div><AiFillTwitterSquare className='text-3xl hover:opacity-100 hover:scale-110 duration-150
                opacity-75 hover:text-white'/></div>
                <div><BsInstagram className='text-2xl hover:opacity-100 hover:scale-110 duration-150
                opacity-75 hover:text-white'/></div>
            </div>
        </div>
    </main>
  )
}

export default Footer