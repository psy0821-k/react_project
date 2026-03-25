import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import S from './flower.module.css';

function Model() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/flower.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    const firstAction = actions[Object.keys(actions)[0]];
    firstAction?.reset().fadeIn(0.5).play();

    return () => {
      firstAction?.fadeOut(0.5);
    };
  }, [actions]);

  return <primitive ref={group} object={scene} scale={7} position={[0, -1.3, 0]} rotation={[-0.2, Math.PI / 4, -0.1]} />;
}

export default function FlowerModel() {
  return (
    <div className={S.canvasWrapper}>
      <div className={S.overlay}></div>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 10]} />
        <Model />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />{' '}
      </Canvas>
    </div>
  );
}

useGLTF.preload('/flower.glb');
