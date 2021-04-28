import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import Model from './Model'

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 20, 0.05)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.05)
  })
  return <group ref={ref}>{children}</group>
}

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
            <Rig>
              <Model url="/compressed.glb" />
            </Rig>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            />
          </group>
        </Suspense>
      </Canvas>
      <div class="overlay">
        <a href="https://docs.pmnd.rs/react-three-fiber/examples/showcase">
          <b>pmnd.rs</b>
        </a>
        <a class="right" href="https://codesandbox.io/s/baked-ao-f5sgi">
          /me
        </a>
        <h1>
          <span>Array</span>FTW
        </h1>
        <h2>
          ArrayFTW is a free course about teaching you how to <br />
          manipulate objects and arrays in JavaScript
          <br />
          Because the internet is just lists and forms
        </h2>
      </div>
    </>
  )
}
