import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

function RealisticEarth({ isMobile }) {
  const earthRef = useRef();
  const cloudsRef = useRef();

  const [dayMap, normalMap, specularMap, cloudsMap] = useTexture([
    "/assets/earth/earth_day.jpg",
    "/assets/earth/earth_normal.jpg",
    "/assets/earth/earth_specular.jpg",
    "/assets/earth/earth_clouds.png",
  ]);

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.16;
    }
  });

  const radius = isMobile ? 1.5 : 1.8;

  return (
    <group position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      {/* Real Earth Globe */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.85, 0.85)}
          roughnessMap={specularMap}
          roughness={0.65}
          metalness={0.12}
        />
      </mesh>

      {/* Floating Realistic Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[radius + 0.025, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Atmospheric Fresnel Soft Blue Rim Glow */}
      <mesh>
        <sphereGeometry args={[radius + 0.075, 48, 48]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent={true}
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function Earth({ isMobile }) {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[6, 3, 6]} intensity={2.6} color="#ffffff" />
      <pointLight position={[-6, -3, -6]} intensity={0.7} color="#38bdf8" />
      <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#93c5fd" />

      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 2.6}
        enableDamping={true}
        dampingFactor={0.05}
        enablePan={false}
        enableRotate={true}
        makeDefault
      />

      <Suspense fallback={<CanvasLoader />}>
        <RealisticEarth isMobile={isMobile} />
      </Suspense>
    </>
  );
}

function EarthCanvas({ isMobile }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          outputColorSpace: THREE.SRGBColorSpace,
          alpha: true,
          antialias: true,
        }}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      >
        <Earth isMobile={isMobile} />
      </Canvas>
    </div>
  );
}

export default EarthCanvas;
