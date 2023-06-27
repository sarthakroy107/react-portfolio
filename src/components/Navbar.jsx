import React from 'react'
import logo from '../assets/sarthak-logo-2.svg'
import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

// function animate() {
//     let iteration = 0;
//     let interval = setInterval(() => {
//       setHeader("");
//       let newStr = "";
//       text.split("").forEach((element, index) => {
//         let char = ALPHABETS[Math.round(Math.random() * 26)] ?? "M";
//         if (index < iteration) {
//           char = text[index];
//         }
//         newStr += char;
//       });
//       console.log(newStr)
//       setHeader(newStr);
//       iteration += 1;
//       if (iteration > text.length) {
//         clearInterval(interval);
//       }
//     }, 60);
//   }


export const Navbar = () => {
  return (
    <div className='bg-transparent absolute w-full top-0 z-40'>
        <nav className='flex justify-between h-20 items-center'>
            <div>
            <NavLink to="/" >
                <div><img className='w-40 ml-12' src={logo} alt="" /></div>
            </NavLink>
            </div>
            <div className='flex w-1/4 items-center justify-around'>
                <div className='flex gap-7'>
                    <div className='relative'>
                        <NavLink to="/">
                            <div className='group w-fit'>
                                <div className='opacity-75 hover:opacity-100 duration-150'>Home</div>
                                    <div className='h-[2px] inline-block w-0 bg-light absolute
                                    group-hover:w-full transition-[width] ease duration-300'>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <NavLink to="/about" >
                        <div className='group w-fit'>
                            <div className='opacity-75 hover:opacity-100 duration-150'>About</div>
                            <div className='h-[2px] inline-block w-0 bg-light absolute
                            group-hover:w-12 transition-[width] ease duration-300'>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/contact" >
                        <div  className='group w-fit'>
                            <div className='opacity-75 hover:opacity-100 duration-150'>Contact</div>
                            <div className='h-[2px] inline-block w-0 bg-light absolute
                            group-hover:w-14 transition-[width] ease duration-300'>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className='flex w-1/5 gap-3 justify-around'>
                    <motion.a whileHover={{y:-5}}
                    href="https://github.com/Sarthak28roy" target='_blank'><FaGithub className='w-6 h-6 opacity-75
                    hover:opacity-100'/></motion.a>
                    <motion.a whileHover={{y:-5}}
                    href="https://leetcode.com/sarthakroy107/" target='_blank'><SiLeetcode className='w-6 h-6 opacity-75
                    hover:opacity-100'/></motion.a>
                </div>
            </div>
        </nav>
    </div>
  )
}
