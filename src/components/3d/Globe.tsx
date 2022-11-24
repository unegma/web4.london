import React, {Suspense} from 'react';
import moonImg from "../images/moontexture.png";
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";

let imgs = {
  moon: `${process.env.REACT_APP_ASSETS_URL}/moontexture.png`,
};

export default function Globe({position, size, color, name}: any): JSX.Element {
  const texture = useLoader(THREE.TextureLoader, imgs.moon);
  texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <mesh position={position}>
      <sphereBufferGeometry attach="geometry" args={size} />
      <meshStandardMaterial color={color} attach="material" map={texture} />
    </mesh>
  )
}
