import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import { Cube } from "./Cube";

export function Web4(props: any) {
  return (
    <>
      <>
        <Cube position={[0, 0, -10]} />
        <Cube position={[0, 1, -10]} />
        <Cube position={[0, 2, -10]} />
        <Cube position={[0, 3, -10]} />
        <Cube position={[0, 4, -10]} />
        <Cube position={[1, 0, -10]} />
        <Cube position={[2, 0, -10]} />
        <Cube position={[2, 1, -10]} />
        <Cube position={[2, 2, -10]} />
        <Cube position={[2, 3, -10]} />
        {/*<Cube position={[2, 4, -10]} />*/}
        <Cube position={[3, 0, -10]} />
        <Cube position={[4, 0, -10]} />
        <Cube position={[4, 1, -10]} />
        <Cube position={[4, 2, -10]} />
        <Cube position={[4, 3, -10]} />
        <Cube position={[4, 4, -10]} />
      </>
      <>
        <Cube position={[6, 0, -10]} />
        <Cube position={[6, 1, -10]} />
        <Cube position={[6, 2, -10]} />
        <Cube position={[6, 3, -10]} />
        <Cube position={[6, 4, -10]} />
        <Cube position={[7, 0, -10]} />
        <Cube position={[8, 0, -10]} />
        <Cube position={[7, 2, -10]} />
        <Cube position={[8, 2, -10]} />
        <Cube position={[7, 4, -10]} />
        <Cube position={[8, 4, -10]} />
      </>
      <>
        <Cube position={[10, 0, -10]} />
        <Cube position={[10, 1, -10]} />
        <Cube position={[10, 2, -10]} />
        <Cube position={[10, 3, -10]} />
        <Cube position={[10, 4, -10]} />
        <Cube position={[11, 4, -10]} />
        <Cube position={[12, 4, -10]} />
        <Cube position={[12, 3, -10]} />
        <Cube position={[12, 1, -10]} />
        <Cube position={[12, 0, -10]} />
        <Cube position={[11, 0, -10]} />
        <Cube position={[11, 2, -10]} />
      </>
      <>
        <Cube position={[14, 2, -10]} />
        <Cube position={[14, 3, -10]} />
        <Cube position={[14, 4, -10]} />
        <Cube position={[15, 2, -10]} />
        <Cube position={[16, 2, -10]} />
        <Cube position={[16, 1, -10]} />
        <Cube position={[16, 0, -10]} />
        <Cube position={[17, 2, -10]} />
        <Cube position={[16, 3, -10]} />
      </>
    </>
  )
}
