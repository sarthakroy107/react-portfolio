import React from 'react'
import { Hero } from '../Hero'
import { Globe } from './Globe'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export const Landing = () => {
  return (
    <main className=''>
        <Hero text="Sarthak"/>
        <div className=' h-0 md:h-screen w-0 md:w-full absolute top-0 z-[0] flex items-center justify-between'>
            <div className='md:h-2/5 md:w-3/5'></div>
            <div className='h-full md:w-2/4'>
              <Canvas className='w-full'>
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
