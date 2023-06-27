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
import { BsArrowRight, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import {TbMail} from 'react-icons/tb'
import emailjs from '@emailjs/browser';
const CanvasContainer = styled.div`
  width: 30%;
  height: 60vh;
`;


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_can1t7g', 'template_dgfvcen', form.current, '4pb4_ghX6bHHCbtIO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


export const Contact = () => {
  const img1 = useLoader(TextureLoader, chisato)
  const img2 = useLoader(TextureLoader, chizuru)
  const img3 = useLoader(TextureLoader, megumin)
  const img4 = useLoader(TextureLoader, sakura)
  const img5 = useLoader(TextureLoader, sayu)
  const img6 = useLoader(TextureLoader, kei)
  const mesh = useRef()
  return (
    <main id='Contact' className='min-h-screen w-full flex flex-col justify-around'>
      <div >
      <h2 className='text-4xl font-semibold mt-10 mb-5 md:mt-0 text-center'>Contact</h2>
      </div>
      <div className='flex flex-col-reverse md:flex-row'>
      <div className='w-full md:w-[30%] md:h-[60vh]'>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Canvas camera={{fov:25, position:[5,5,5]}}>
              <OrbitControls enableZoom={false} autoRotate/>
              <ambientLight intensity={1}/>
              <mesh ref={mesh} >
                      <boxGeometry attach="geometry" args={[1.5,1.5,1.5]}/>
                      <meshStandardMaterial attach={"material-2"} map={img1}/>
                      <meshStandardMaterial attach={"material-1"} map={img2}/>
                      <meshStandardMaterial attach={"material-0"} map={img3}/>
                      <meshStandardMaterial attach={"material-3"} map={img4}/>
                      <meshStandardMaterial attach={"material-4"} map={img5}/>
                      <meshStandardMaterial attach={"material-5"} map={img6}/>
                  </mesh>
            </Canvas>
          </Suspense>
        </div>
        <div className='mt-5 md:mt-0w-full md:w-2/3 flex justify-center items-center'>
          <div className='w-full md:w-2/3 px-6 md:px-0'>
          <form onSubmit={sendEmail} className='w-full md:w-3/4 flex flex-col gap-3 justify-evenly h-2/3'  action="">
                <div className='flex flex-col md:flex-row justify-between gap-2 w-full'>
                  <div className='rounded-lg w-full md:w-[50%] bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                    <label className='text-md font-light' htmlFor="">Name</label>
                    <input className=' text-sm bg-transparent outline-none' type="text" name='from_name' required/>
                  </div>
                  <div className='rounded-lg w-full md:w-[50%] bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                    <label className='text-md font-light' htmlFor="">Email</label>
                    <input className=' text-sm bg-transparent outline-none' name='email' type="email" required/>
                  </div>
                </div>
                <div className='rounded-lg bg-white bg-opacity-40 px-3 py-2 flex flex-col'>
                  <label className='text-md font-light' htmlFor="">Subject</label>
                  <input className=' text-sm bg-transparent outline-none' name='subject' type="text" required/>
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
        <div className='w-full items-center gap-5 md:w-1/4 flex flex-col h-1/2 justify-around mr-3'>
          <div className='flex flex-col gap-4'>
            <div className='flex text-lg gap-3'>
              <span><BsTelegram className='text-2xl text-blue-500'/></span><a href='https://t.me/sarthakroy107'>
                <p className='opacity-70'>@sarthakroy107</p></a>
            </div>
            <div className='flex text-lg gap-3'>
              <span className='text-2xl text-green-500'><BsWhatsapp/></span>
              <a className='opacity-70' href='https://wa.me/918371074649'>+91-8371074649</a>
            </div>
            <div className='flex text-lg gap-3'>
              <span className='text-2xl'><TbMail/></span>
              <a className='opacity-70' href="">sarthakroy107@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
