import {DefaultXRControllers, VRCanvas, useXR} from "@react-three/xr";
import {Html, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React, {Suspense, useState} from "react";
import {Menu, ZoomIn, ZoomOut} from "@mui/icons-material";
import GridOnIcon from "@mui/icons-material/GridOn";
const initialHelperText = '↺ or ⇉ Model';

export default function SpaceOne({space, cameraPosition}: any) {
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
      <div className={`buttons-container buttons-container--left-helper`}>
        <p className='helperText' onClick={() => {showHelperTextMessage()}}>{helperText}</p>
      </div>

      <div className={`buttons-container buttons-container--mid-right`}>
        <GridOnIcon className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleGridOn()}}/>

        { zoomOn && (
          <ZoomIn className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoomOn()}}/>
        )}
        { !zoomOn && (
          <ZoomOut className="pointer" style={{ color: "white", margin: "4px 4px" }} onClick={() => {toggleZoomOn()}}/>
        )}
      </div>

      <VRCanvas>
        <DefaultXRControllers />

        {/*lock zoom to keep dolls house view. Can use minPolarAngle={Math.PI/2.1} maxPolarAngle={Math.PI/2.1} to lock rotation */}
        <OrbitControls enableZoom={zoomOn} enablePan={true} />
        {/*todo add zoom controls*/}
        {/*<OrbitControls enableZoom={zoomOn} enablePan={true} minDistance={4} maxDistance={10} />*/}

        <ambientLight/>
        <pointLight intensity={3} position={[0, 0, 0]}/>
        <PerspectiveCamera position={cameraPosition} makeDefault/>

        <group visible={gridOn}>
          <gridHelper position={[0,-1.4,-3.81]}/>

          <gridHelper position={[0,-1.4,6.19]}/>
          <gridHelper position={[-10,-1.4,6.19]}/>
          <gridHelper position={[-10,-1.4,-3.81]}/>
          <gridHelper position={[-10,-1.4,-13.81]}/>
          <gridHelper position={[0,-1.4,-13.81]}/>
          <gridHelper position={[10,-1.4,-13.81]}/>
          <gridHelper position={[10,-1.4,-3.81]}/>
          <gridHelper position={[10,-1.4,6.19]}/>
        </group>

        <Suspense fallback={<Html className="white">loading 3d view..</Html>}>
          {space}
        </Suspense>
      </VRCanvas>
    </>
  )
}
