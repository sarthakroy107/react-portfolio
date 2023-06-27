import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );


  return (
    <>
      <ambientLight intensity={1} />
      {/* <pointLight color="#f6f3ea" position={[0, 1, 5]} intensity={1.2} /> */}
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <Preload all/>
      </mesh>
    </>
  );
}
