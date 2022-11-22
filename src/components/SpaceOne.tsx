import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, Loader, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense, useState} from "react";
import { Physics } from "@react-three/rapier"
const initialHelperText = '↺ or ⇉ Model';
import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Ground } from "./3d/Ground"
import { Player } from "./3d/Player"
import { Cube, Cubes } from "./3d/Cube"

export default function SpaceOne({isMobile, cameraPosition, setShowInfoModal, infoModalText, setInfoModalText, picSet}: any) {
  const { player } = useXR();

  const [gridOn, setGridOn] = useState(false);
  const [zoomOn, setZoomOn] = useState(false);
  const [helperText, setHelperText] = useState(initialHelperText);

  const showHelperTextMessage = () => {
    let helperTextAlertMessage = 'Model can be rotated or panned: \n' +
      'Controls vary depending on your device.\n\n' +
      'Panning is usually two finger click and drag\n' +
      'Or holding Command/Ctrl and then clicking and dragging.'
    if(zoomOn) {
      helperTextAlertMessage = helperTextAlertMessage + '\n\nZoom is usually pinch or scroll with 2 fingers.'
    }

    alert(helperTextAlertMessage);
  };

  const toggleGridOn = () => {
    setGridOn(!gridOn);

    if (!gridOn) {
      setHelperText('1 Square is approx 1m²');
    } else {
      setHelperText(initialHelperText);
    }
  };

  const toggleZoomOn = () => {
    setZoomOn(!zoomOn);

    if (!zoomOn) {
      alert('Zoom Enabled\n\nPLEASE BE AWARE\n\nThis model is a reduced quality scan\nThis will be more noticeable when zooming!')
      setHelperText(`⚲ or ${initialHelperText}`);
    } else {
      setHelperText(initialHelperText);
    }
  }

  return (
    <>
      <Loader/>

      {/*<VRCanvas>*/}
      {/*  <DefaultXRControllers />*/}

      {/*  /!*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation *!/*/}
      {/*  /!*<OrbitControls enableZoom={zoomOn} enablePan={true} />*!/*/}
      {/*  /!*todo add zoom controls*!/*/}

      {/*  { isMobile === false && (*/}
      {/*    <OrbitControls*/}
      {/*      enableZoom={false} enablePan={false} minDistance={4} maxDistance={10}*/}
      {/*      minPolarAngle={1} maxPolarAngle={1.75}*/}
      {/*      maxAzimuthAngle={1.4} minAzimuthAngle={0.8}*/}
      {/*    />*/}
      {/*  )}*/}


      {/*  { isMobile === true && (*/}
      {/*    <OrbitControls*/}
      {/*      enableZoom={false} enablePan={false} minDistance={4} maxDistance={10}*/}
      {/*      minPolarAngle={1} maxPolarAngle={1.75}*/}
      {/*      maxAzimuthAngle={2} minAzimuthAngle={-0.1}*/}
      {/*    />*/}
      {/*  )}*/}

      {/*  <ambientLight/>*/}
      {/*  <pointLight intensity={2} position={[0, 0, 0]}/>*/}
      {/*  <PerspectiveCamera position={cameraPosition} makeDefault rotation={[0,-1,0]}/>*/}
      {/*  /!*<PerspectiveCamera position={cameraPosition} fov={12} makeDefault/>*!/*/}

      {/*  <Suspense>*/}
      {/*    {space}*/}

      {/*    { picSet == 1 && (*/}
      {/*      <>*/}
      {/*        <BlacksPicture1 setShowInfoModal={setShowInfoModal} setInfoModalText={setInfoModalText} />*/}
      {/*        <BlacksPicture2 setShowInfoModal={setShowInfoModal} setInfoModalText={setInfoModalText} />*/}
      {/*        <BlacksPicture3 setShowInfoModal={setShowInfoModal} setInfoModalText={setInfoModalText} />*/}
      {/*      </>*/}
      {/*    )}*/}

      {/*    { picSet == 2 && (*/}
      {/*      <>*/}
      {/*        <JoePicture1 setShowInfoModal={setShowInfoModal} setInfoModalText={setInfoModalText} />*/}
      {/*        <JoePicture2 setShowInfoModal={setShowInfoModal} setInfoModalText={setInfoModalText} />*/}
      {/*        <JoePicture3 setShowInfoModal={setShowInfoModal} setInfoModalText={setInfoModalText} />*/}
      {/*      </>*/}
      {/*    )}*/}
      {/*  </Suspense>*/}
      {/*</VRCanvas>*/}

      {/*// Credit: The original was made by Maksim Ivanow: https://www.youtube.com/watch?v=Lc2JvBXMesY&t=124s*/}
      {/*// This demo needs pointer-lock, that works only if you open it in a new window*/}
      {/*// Controls: WASD + left click*/}

      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}>
        <Canvas shadows camera={{ fov: 45 }}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>

            <Suspense>
              <Ground />
              <Player />
            </Suspense>
            <Cube position={[0, 0.5, -10]} />
            <Cubes />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    </>
  )
}
