import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import { Cube } from "./Cube";

export function Web4(props: any) {
  return (
    <>
      <>
        <Cube position={[0, 0, -12]} />
        <Cube position={[0, 1, -12]} />
        <Cube position={[0, 2, -12]} />
        <Cube position={[0, 3, -12]} />
        <Cube position={[0, 4, -12]} />
        <Cube position={[1, 0, -12]} />
        <Cube position={[2, 0, -12]} />
        <Cube position={[2, 1, -12]} />
        <Cube position={[2, 2, -12]} />
        <Cube position={[2, 3, -12]} />
        {/*<Cube position={[2, 4, -12]} />*/}
        <Cube position={[3, 0, -12]} />
        <Cube position={[4, 0, -12]} />
        <Cube position={[4, 1, -12]} />
        <Cube position={[4, 2, -12]} />
        <Cube position={[4, 3, -12]} />
        <Cube position={[4, 4, -12]} />
      </>
      <>
        <Cube position={[6, 0, -12]} />
        <Cube position={[6, 1, -12]} />
        <Cube position={[6, 2, -12]} />
        <Cube position={[6, 3, -12]} />
        <Cube position={[6, 4, -12]} />
        <Cube position={[7, 0, -12]} />
        <Cube position={[8, 0, -12]} />
        <Cube position={[7, 2, -12]} />
        <Cube position={[8, 2, -12]} />
        <Cube position={[7, 4, -12]} />
        <Cube position={[8, 4, -12]} />
      </>
      <>
        <Cube position={[10, 0, -12]} />
        <Cube position={[10, 1, -12]} />
        <Cube position={[10, 2, -12]} />
        <Cube position={[10, 3, -12]} />
        <Cube position={[10, 4, -12]} />
        <Cube position={[11, 4, -12]} />
        <Cube position={[12, 4, -12]} />
        <Cube position={[12, 3, -12]} />
        <Cube position={[12, 1, -12]} />
        <Cube position={[12, 0, -12]} />
        <Cube position={[11, 0, -12]} />
        <Cube position={[11, 2, -12]} />
      </>
      <>
        <Cube position={[14, 2, -12]} />
        <Cube position={[14, 3, -12]} />
        <Cube position={[14, 4, -12]} />
        <Cube position={[15, 2, -12]} />
        <Cube position={[16, 2, -12]} />
        <Cube position={[16, 1, -12]} />
        <Cube position={[16, 0, -12]} />
        <Cube position={[17, 2, -12]} />
        <Cube position={[16, 3, -12]} />
      </>
    </>
  )
}
