import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import {useLoader} from "@react-three/fiber";
import {CubeTextureLoader} from "three";

// todo fixme
let imgs = {
  grass: `${process.env.REACT_APP_ASSETS_URL}/grass.jpg`,
};



export function Ground(props: any) {
  // const texture = useLoader(THREE.TextureLoader, image)

  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    imgs.grass,
  ]);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <RigidBody {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial map={texture} map-repeat={[240, 240]} color="green" />
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  )
}
