import React from 'react'
import { Hero } from '../Hero'
import { Globe } from './Globe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Navbar } from './Navbar'
export const Landing = () => {
  return (
    <main className=''>
        <Hero text="Sarthak"/>
        <div className='h-screen w-full absolute top-0 z-[0] flex items-center justify-between'>
            <div className='h-2/5 w-3/5'></div>
            <div className='h-full w-2/4'>
              <Canvas>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={0.6}/>
                  <directionalLight position={[-2, 5, 2]} intensity={1}/>
                  <Suspense>
                  <Globe/>
                  </Suspense>
              </Canvas>
            </div>
        </div>
    </main>
  )
}
