import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import chisato from '../assets/chisatofinal.png'
import chizuru from '../assets/chizuru.jpg'
import megumin from '../assets/megumin.jpg'
import sakura from '../assets/sakura.jpg'
import sayu from '../assets/sayu.jpg'
import kei from '../assets/kei.jpg'
import { TextureLoader } from 'three'
import styled from "styled-components";
import { BsArrowRight, BsTelegram } from 'react-icons/bs';

const CanvasContainer = styled.div`
  width: 50%;
  height: 100vh;
`;


export const Contact = () => {
  const img1 = useLoader(TextureLoader, chisato)
  const img2 = useLoader(TextureLoader, chizuru)
  const img3 = useLoader(TextureLoader, megumin)
  const img4 = useLoader(TextureLoader, sakura)
  const img5 = useLoader(TextureLoader, sayu)
  const img6 = useLoader(TextureLoader, kei)
  const mesh = useRef()
  return (
    <main className='h-screen w-full flex flex-col justify-around'>
      <div>
      <h2 className='text-4xl font-semibold mb-20 text-center'>Contact</h2>
      </div>
      <div className='flex'>
        <CanvasContainer>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Canvas camera={{fov:25, position:[5,5,5]}}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1}/>
              <mesh ref={mesh} >
                      <boxGeometry attach="geometry" args={[1,1,1]}/>
                      <meshStandardMaterial attach={"material-2"} map={img1}/>
                      <meshStandardMaterial attach={"material-1"} map={img2}/>
                      <meshStandardMaterial attach={"material-0"} map={img3}/>
                      <meshStandardMaterial attach={"material-3"} map={img4}/>
                      <meshStandardMaterial attach={"material-4"} map={img5}/>
                      <meshStandardMaterial attach={"material-5"} map={img6}/>
                  </mesh>
            </Canvas>
          </Suspense>
        </CanvasContainer>
        <div className='md:w-1/2 flex justify-center items-center'>
          <div className='w-2/3'>
          <form className='w-3/4 flex flex-col gap-3 justify-evenly h-2/3'  action="">
                <div className='flex gap-3'>
                  <div className='rounded-lg bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                    <label className='text-md font-light' htmlFor="">Name</label>
                    <input className=' text-sm bg-transparent outline-none' type="text" required/>
                  </div>
                  <div className='rounded-lg bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                    <label className='text-md font-light' htmlFor="">Email</label>
                    <input className=' text-sm bg-transparent outline-none' type="text" required/>
                  </div>
                </div>
                <div className='rounded-lg bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                  <label className='text-md font-light' htmlFor="">Subject</label>
                  <input className=' text-sm bg-transparent outline-none' type="text" required/>
                </div>
                <div className='rounded-lg bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                  <label className='text-md font-light' htmlFor="">Message</label>
                  <textarea className=' bg-transparent outline-none h-36 px-3 py-2' name="message" />
                </div>
                <div className='my-1'>
                  <button class="wrapper bg-[#a855f7] p-2 px-4 rounded-md"> 
                    <div class="btn-pink flex items-center justify-evenly gap-2" id="btn-top">
                      Send<span><BsArrowRight/></span>
                    </div>
                  </button>
                </div>
              </form>
          </div>

        </div>
        <div className='w-20'>
          <div><span><BsTelegram/></span></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
