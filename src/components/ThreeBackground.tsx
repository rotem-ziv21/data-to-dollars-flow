import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Brand colors: primary, secondary, accent
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Primary color #120c4c
        colors[i * 3] = 0.07;
        colors[i * 3 + 1] = 0.05;
        colors[i * 3 + 2] = 0.3;
      } else if (colorChoice < 0.66) {
        // Secondary color #ff7a45
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.48;
        colors[i * 3 + 2] = 0.27;
      } else {
        // Accent color #ff02ff
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 0.01;
        colors[i * 3 + 2] = 1;
      }
    }
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent 
        vertexColors 
        size={0.8} 
        sizeAttenuation={true} 
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingOrbs() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5, 32, 32]} position={[-8, 4, -5]}>
          <meshPhongMaterial color="#120c4c" transparent opacity={0.3} />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.3, 32, 32]} position={[8, -3, -3]}>
          <meshPhongMaterial color="#ff7a45" transparent opacity={0.4} />
        </Sphere>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={3}>
        <Sphere args={[0.4, 32, 32]} position={[0, 6, -8]}>
          <meshPhongMaterial color="#ff02ff" transparent opacity={0.2} />
        </Sphere>
      </Float>
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff7a45" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#120c4c" />
        <pointLight position={[0, 0, 10]} intensity={0.3} color="#ff02ff" />
        
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}