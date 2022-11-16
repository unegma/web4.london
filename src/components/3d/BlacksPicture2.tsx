import * as THREE from 'three'
import React, {useEffect, useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
const SPACE_URI = `${process.env.REACT_APP_ASSETS_URL}/blacks-picture-2-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Frame2: THREE.Mesh
  }
  materials: {
    Frames: THREE.MeshStandardMaterial
  }
}

export default function BlacksPicture2({ setShowInfoModal, setInfoModalText, ...props }: any) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF(SPACE_URI, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null} rotation={[0,2.75,0]} scale={1.3} position={[-1.7,0.7,-2.5]}
           onPointerOver={() => setHovered(true)}
           onPointerOut={() => setHovered(false)}
           onClick={() => {setShowInfoModal(true); setInfoModalText('Info about Picture2 and Buy info (this actual painting is not for sale and will not be!)')}}
    >
      <mesh castShadow receiveShadow geometry={nodes.Frame2.geometry} material={materials.Frames} rotation={[0.02, 0, 0]}>
        {hovered && (
          <meshBasicMaterial color={'red'}/>
        )}
      </mesh>
    </group>
  )
}

useGLTF.preload(SPACE_URI)
