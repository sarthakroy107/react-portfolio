import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

export const Globe = () => {
  return (
        <Sphere  visible args={[1, 100, 200]} scale={2.3}>
            <MeshDistortMaterial  color="#8352FD"/>
        </Sphere>

  )
}
