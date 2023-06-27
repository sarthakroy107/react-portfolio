import React, { Suspense } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./Earth";
import { FaHtml5, FaReact, FaPython } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { SiCss3, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiCplusplus } from 'react-icons/si';
import { motion } from "framer-motion";


const CanvasContainer = styled.div`
  width: 50%;
  height: 100vh;
`;
export const Skills = () => {
  return (
    <main className="flex items-center justify-evenly">
      <CanvasContainer className=''>
        <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        >
          <Suspense fallback={null}>
            <OrbitControls
            
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
            <Earth/>
            <Preload all/>
          </Suspense>
        </Canvas>
      </CanvasContainer>
      <div className="w-1/2 flex justify-center items-center">
        <div className=" w-3/4  ">
            <div className="w-3/4  flex flex-col">
              <h3 className="font-semibold text-xl">Front-End:</h3>
              <motion.div transition={{duration: 0.8, type: "spring"}} 
              initial={{x:50, opacity:0 }} whileInView={{x:0, opacity: 1}} 
              className=" my-3 flex justify-left px-5 py-3 gap-7 ">
                <p><FaHtml5 className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
                hover:text-blue-500 duration-150"/></p>
                <p><SiCss3 className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
                hover:text-blue-500 duration-150"/></p>
                
                <p><FaReact className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
                hover:text-blue-300 duration-150"/></p>
                <p><SiTailwindcss className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
                hover:text-blue-400 duration-150"/></p>
              </motion.div>
            </div>
            <div className=" w-3/4 flex flex-col ">
              <h3 className="font-semibold text-xl">Back-End:</h3>
              <motion.div transition={{duration: 0.8, type: "spring"}} 
              initial={{x:-50, opacity:0 }} whileInView={{x:0, opacity: 1}} 
               className=" my-3 flex justify-left px-5 py-3 gap-7 ">
                <p><GrNode className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
              hover:text-green-600 duration-150"/></p>
                <p><SiExpress className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
              hover:text-black duration-150"/></p>
                <p><SiMongodb className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
              hover:text-green-400 duration-150"/></p>
                <p><SiPostman className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
              hover:text-orange-500 duration-150"/></p>
              </motion.div>
            </div>
            <div className=" w-3/4 flex flex-col ">
              <h3 className="font-semibold text-xl">Languages:</h3>
              <motion.div transition={{duration: 0.8, type: "spring"}} 
              initial={{x:50, opacity:0 }} whileInView={{x:0, opacity: 1}} 
               className=" my-3 flex justify-left px-5 py-3 gap-7 ">
                <p><SiCplusplus className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
              hover:text-blue-700 duration-150"/></p>
                <p><SiJavascript className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12
                hover:text-yellow-500 duration-150"/></p>
                <p><FaPython className="h-12 rounded-xl p-2 border border-light bg-light bg-opacity-10 w-12"/></p>
              </motion.div>
            </div>
        </div>
      </div>
    </main>
  )
}
