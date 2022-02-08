import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/* eslint-disable-next-line */
export interface FrontUiChessGameChessboardProps {}

const Model = () => {
  const gltf = useLoader(
    GLTFLoader,
    'http://localhost:4200/chess-model/scene.gltf'
  );
  gltf.scene.traverse(function (child) {
    child.castShadow = true;
    child.receiveShadow = true;
  });
  gltf.scene.children[0].children[0].children[0].children.map((child) => {
    console.log(child);
    if (child.name === 'Rook_LOD0001') {
      child.position.z = 1;
      child.position.y = 1;
      child.position.x = 1;
    }
  });
  return (
    <primitive
      position={[0, 0, 0]}
      object={gltf.scene}
      scale={1}
      onClick={(e: any) => {
        console.log(e);
        console.log(e.object);
        e.stopPropagation();
      }}
    />
  );
};

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 0;
    controls.maxDistance = 40;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export function FrontUiChessGameChessboard(
  props: FrontUiChessGameChessboardProps
) {
  return (
    <Canvas shadows gl={{ antialias: true }}>
      <CameraController />
      <ambientLight />
      {/*<spotLight position={[0, 20, 0]} angle={1} penumbra={1} />*/}
      {/*<spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 10, 0]} />*/}
      {/*<directionalLight
        castShadow
        position={[0, 10, -20]}
        intensity={1.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />*/}
      <pointLight
        position={[0, 10, 0]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Suspense fallback={'wait'}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default FrontUiChessGameChessboard;
