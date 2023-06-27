import React, { useState } from 'react'
import ManPic from './assets/ManPic.svg'
import StarsCanvas from './components/StarsCanvas'
import { motion } from 'framer-motion'
import { AnimatedText } from './components/Animatedtext1'
import Typewriter from 'typewriter-effect'
import buttoncss from './components/buttoncss.css'
const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const Hero = ({text}) => {
  const [header, setHeader] = useState(text);
  console.log(text)
  function animate() {
    let iteration = 0;
    let interval = setInterval(() => {
      setHeader("");
      let newStr = "";
      text.split("").forEach((element, index) => {
        let char = ALPHABETS[Math.round(Math.random() * 26)] ?? "M";
        if (index < iteration) {
          char = text[index];
        }
        newStr += char;
      });
      console.log(newStr)
      setHeader(newStr);
      iteration += 1;
      if (iteration > text.length) {
        clearInterval(interval);
      }
    }, 60);
  }
  return (
    <main>
        <StarsCanvas/>
        <div className=' relative top-0 z-[2] flex justify-between items-center h-screen w-full'>
            <div className='w-1/2 flex flex-col items-center justify-center'>
              <div>
                <AnimatedText text="Sarthak&nbsp;Roy" />
              </div>
              <br />
              <div className='text-2xl text-[#f5f5f5] opacity-80'>
                <Typewriter options={{
                              autoStart: true,
                              loop: true,
                              delay: 100,
                              strings : [
                                  "MERN stack developer",
                                  "Aspiring SDE"
                              ],
                          }}/>
              </div>
                <a href="#" class="button">
                  <div class="button__line"></div>
                  <div class="button__line"></div>
                  <span class="button__text">Resume</span>
                  <div class="button__drow1"></div>
                  <div class="button__drow2"></div>
                </a>
            </div>
            <div className=' animate-pingpong w-1/2 flex justify-center items-center'>
              <img className='w-96 h-96' src={ManPic} alt="Astronout" />
            </div>
        </div>
    </main>
  )
}
