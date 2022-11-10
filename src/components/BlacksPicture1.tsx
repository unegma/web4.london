import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
const SPACE_URI = `${process.env.REACT_APP_ASSETS_URL}/blacks-picture-1-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Frame1: THREE.Mesh
  }
  materials: {
    Frames: THREE.MeshStandardMaterial
  }
}

export default function BlacksPicture1({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(SPACE_URI, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} rotation={[0,2.75,0]} scale={1.3} position={[-2.75,0.7,0.65]}>
      <mesh castShadow receiveShadow geometry={nodes.Frame1.geometry} material={materials.Frames} rotation={[-0.03, 0, 0]} />
    </group>
  )
}

useGLTF.preload(SPACE_URI)
