import { OrbitControls, RenderTexture } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { TextureLoader } from 'three'

const CanvasContainer = styled.div`
  width: 50%;
  height: 100vh;
`;
import styled from "styled-components";
export const cube = () => {
  return (
            <mesh >
                <boxGeometry attach="geometry" args={[2,2,2]}/>
                <meshBasicMaterial attach="material-0" color="#00FF00" />
                <meshBasicMaterial attach="material-1" color="#FF0000" />
                <meshBasicMaterial attach="material-2" color="#0000FF" />
                <meshBasicMaterial attach="material-3" color="#FFFF00" />
                <meshBasicMaterial attach="material-4" color="#FF00FF" />
                <meshBasicMaterial attach="material-5" color="#00FFFF" />
            </mesh>
  )
}
