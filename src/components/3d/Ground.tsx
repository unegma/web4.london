import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import {useLoader} from "@react-three/fiber";

let imgs = {
  grass: `${process.env.REACT_APP_ASSETS_URL}/grass.jpg`,
};

export function Ground(props: any) {
  const texture = useLoader(THREE.TextureLoader, imgs.grass);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <RigidBody {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial attach="material" side={THREE.DoubleSide} map={texture} map-repeat={[240, 240]} color="green" />
        {/*<meshStandardMaterial color="green" />*/}
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  )
}
