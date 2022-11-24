import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import { Cube } from "./Cube";

export function Web4(props: any) {
  return (
    <>
      <>
        <Cube position={[0, 0, -20]} />
        <Cube position={[0, 1, -20]} />
        <Cube position={[0, 2, -20]} />
        <Cube position={[0, 3, -20]} />
        <Cube position={[0, 4, -20]} />
        <Cube position={[1, 0, -20]} />
        <Cube position={[2, 0, -20]} />
        <Cube position={[2, 1, -20]} />
        <Cube position={[2, 2, -20]} />
        <Cube position={[2, 3, -20]} />
        {/*<Cube position={[2, 4, -20]} />*/}
        <Cube position={[3, 0, -20]} />
        <Cube position={[4, 0, -20]} />
        <Cube position={[4, 1, -20]} />
        <Cube position={[4, 2, -20]} />
        <Cube position={[4, 3, -20]} />
        <Cube position={[4, 4, -20]} />
      </>
      <>
        <Cube position={[6, 0, -20]} />
        <Cube position={[6, 1, -20]} />
        <Cube position={[6, 2, -20]} />
        <Cube position={[6, 3, -20]} />
        <Cube position={[6, 4, -20]} />
        <Cube position={[7, 0, -20]} />
        <Cube position={[8, 0, -20]} />
        <Cube position={[7, 2, -20]} />
        <Cube position={[8, 2, -20]} />
        <Cube position={[7, 4, -20]} />
        <Cube position={[8, 4, -20]} />
      </>
      <>
        <Cube position={[10, 0, -20]} />
        <Cube position={[10, 1, -20]} />
        <Cube position={[10, 2, -20]} />
        <Cube position={[10, 3, -20]} />
        <Cube position={[10, 4, -20]} />
        <Cube position={[11, 4, -20]} />
        <Cube position={[12, 4, -20]} />
        <Cube position={[12, 3, -20]} />
        <Cube position={[12, 1, -20]} />
        <Cube position={[12, 0, -20]} />
        <Cube position={[11, 0, -20]} />
        <Cube position={[11, 2, -20]} />
      </>
      <>
        <Cube position={[14, 2, -20]} />
        <Cube position={[14, 3, -20]} />
        <Cube position={[14, 4, -20]} />
        <Cube position={[15, 2, -20]} />
        <Cube position={[16, 2, -20]} />
        <Cube position={[16, 1, -20]} />
        <Cube position={[16, 0, -20]} />
        <Cube position={[17, 2, -20]} />
        <Cube position={[16, 3, -20]} />
      </>
    </>
  )
}
