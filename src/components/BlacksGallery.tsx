import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
const SPACE_URI = `${process.env.REACT_APP_ASSETS_URL}/blacks-gallery-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Gallery: THREE.Mesh
  }
  materials: {
    Gallery: THREE.MeshBasicMaterial
  }
}

export default function BlacksGallery({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(SPACE_URI, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Gallery.geometry} material={materials.Gallery} position={[0.01, -0.15, -0.53]} rotation={[0, -0.14, 0]} />
    </group>
  )
}

useGLTF.preload(SPACE_URI)
