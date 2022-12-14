import { useCallback, useRef, useState } from "react"
import { useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import create from "zustand"
import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

let imgs = {
  dirt: `${process.env.REACT_APP_ASSETS_URL}/notebook.jpg`,
};

const useNotebookStore = create((set) => ({
  notebooks: [],
  addNotebook: (x: any, y: any, z: any) => { // @ts-ignore
    set((state: any) => ({ notebooks: [...state.notebooks, [x, y, z]] }))
  },
}))

export const Notebooks = (props: any) => {
  const notebooks = useNotebookStore((state) => state.notebooks)
  return (
    <>
      {notebooks.map((coords, index) => <Notebook key={index} position={coords}/>)}
    </>
  )
}

export function Notebook({pointerControls, setShowInfoModal, ...props}: any) {
  const texture = useLoader(THREE.TextureLoader, imgs.dirt);
  const ref = useRef()
  const [hover, set] = useState(null)
  const addNotebook = useNotebookStore((state) => state.addNotebook)
  const onMove = useCallback((e: any) => {
    e.stopPropagation()
    // @ts-ignore
    set(Math.floor(e.faceIndex / 2))
  }, [])
  const onOut = useCallback(() => set(null), [])
  const onClick = useCallback((e: any) => {
    e.stopPropagation()
    setShowInfoModal(true);

    setTimeout(() => {
      pointerControls.current.unlock();
    },100);

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
