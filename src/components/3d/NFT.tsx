import { useCallback, useRef, useState } from "react"
import { useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import create from "zustand"
import {useLoader} from "@react-three/fiber";
import * as THREE from "three";

let imgs = {
  nft: `${process.env.REACT_APP_ASSETS_URL}/nft.png`,
};

const useNFTStore = create((set) => ({
  nfts: [],
  addNFT: (x: any, y: any, z: any) => { // @ts-ignore
    set((state: any) => ({ nfts: [...state.nfts, [x, y, z]] }))
  },
}))

export const NFTs = (props: any) => {
  const nfts = useNFTStore((state) => state.nfts)
  return (
    <>
      {nfts.map((coords, index) => <NFT key={index} position={coords}/>)}
    </>
  )
}

export function NFT({pointerControls, setShowNFTModal, ...props}: any) {
  const texture = useLoader(THREE.TextureLoader, imgs.nft);
  const ref = useRef()
  const [hover, set] = useState(null)
  const addNFT = useNFTStore((state) => state.addNFT)
  const onMove = useCallback((e: any) => {
    e.stopPropagation()
    // @ts-ignore
    set(Math.floor(e.faceIndex / 2))
  }, [])
  const onOut = useCallback(() => set(null), [])
  const onClick = useCallback((e: any) => {
    e.stopPropagation()
    setShowNFTModal(true);
  }, [])
  return (
    <RigidBody {...props} type="fixed" colliders="ball" ref={ref}>
      <mesh receiveShadow castShadow onPointerMove={onMove} onPointerOut={onOut} onClick={onClick}>
        {[...Array(6)].map((_, index) => (
          <meshStandardMaterial attach={`material-${index}`} key={index} map={texture} color={hover === index ? "hotpink" : "white"} />
        ))}
        <boxGeometry />
      </mesh>
    </RigidBody>
  )
}
