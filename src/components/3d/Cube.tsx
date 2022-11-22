import { useCallback, useRef, useState } from "react"
import { useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import create from "zustand"
import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

let imgs = {
  dirt: `${process.env.REACT_APP_ASSETS_URL}/dirt.jpg`,
};

// This is a super naive implementation and wouldn't allow for more than a few thousand boxes.
// In order to make this scale this has to be one instanced mesh, then it could easily be
// hundreds of thousands.

const useCubeStore = create((set) => ({
  cubes: [],
  addCube: (x: any, y: any, z: any) => { // @ts-ignore
    set((state: any) => ({ cubes: [...state.cubes, [x, y, z]] }))
  },
}))

export const Cubes = (props: any) => {
  const cubes = useCubeStore((state) => state.cubes)
  return (
    <>
      {cubes.map((coords, index) => <Cube key={index} position={coords}/>)}
    </>
  )
}

export function Cube(props: any) {
  const texture = useLoader(THREE.TextureLoader, imgs.dirt);
  const ref = useRef()
  const [hover, set] = useState(null)
  const addCube = useCubeStore((state) => state.addCube)
  const onMove = useCallback((e: any) => {
    e.stopPropagation()
    // @ts-ignore
    set(Math.floor(e.faceIndex / 2))
  }, [])
  const onOut = useCallback(() => set(null), [])
  const onClick = useCallback((e: any) => {
    e.stopPropagation()
    // @ts-ignore
    const { x, y, z } = ref.current.translation()
    const dir = [
      [x + 1, y, z],
      [x - 1, y, z],
      [x, y + 1, z],
      [x, y - 1, z],
      [x, y, z + 1],
      [x, y, z - 1],
    ]
    // @ts-ignore
    addCube(...dir[Math.floor(e.faceIndex / 2)])
  }, [])
  return (
    <RigidBody {...props} type="fixed" colliders="cuboid" ref={ref}>
      <mesh receiveShadow castShadow onPointerMove={onMove} onPointerOut={onOut} onClick={onClick}>
        {[...Array(6)].map((_, index) => (
          <meshStandardMaterial attach={`material-${index}`} key={index} map={texture} color={hover === index ? "hotpink" : "white"} />
        ))}
        <boxGeometry />
      </mesh>
    </RigidBody>
  )
}
