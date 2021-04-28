import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import Model from './Model'
import Sparkles from './Sparkles'

function Rig({ children }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.mouse.x * Math.PI) / 20, 0.05)
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.05)
  })
  return <group ref={ref}>{children}</group>
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [done, setDone] = useState(true)

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [dark])
  return (
    <>
      <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight color="#ffffff" groundColor="#b9b9b9" position={[-7, 25, 13]} intensity={0.85} />
        <Suspense fallback={null}>
          <group position={[0, 10, 0]}>
            <Rig>
              <Model done={done} rotation={[0, -Math.PI / 2, 0]} dark={dark} />
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
      <main class="w-full h-full absolute top-0 left-0 flex justify-center align-center flex-col pointer-events-none">
        <h1 href="/" className="absolute left-5 top-5 md:left-10 md:top-10 right-auto font-bold">
          arrayftw.com
        </h1>
        <a
          className="absolute right-5 top-5 md:right-10 md:top-10 left-auto"
          target="_blank"
          href="https://twitter.com/NikkitaFTW">
          /instructor
        </a>
        <h2 className="text-3xl md:text-7xl text-center uppercase p-0 m-0 font-medium">
          <span class="font-extralight">Array</span>FTW
        </h2>
        <h4 className="text-center max-w-[80%] mx-auto  mt-6 tracking-wide leading-5 md:leading-6 text-sm md:text-base">
          ArrayFTW is a free course about teaching you how to <br />
          manipulate objects and arrays in JavaScript
          <br />
          Because the internet is just lists and forms
        </h4>
        <form className="mt-8 sm:flex mx-auto">
          <label htmlFor="emailAddress" className="sr-only">
            Email address
          </label>
          <input
            id="emailAddress"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`
              w-full px-5 py-3 placeholder-gray-500 focus:ring-white focus:border-white sm:max-w-xs border-none rounded-md
              ${dark ? ' bg-gray-100 text-gray-800' : ' bg-gray-800 text-gray-100'}`}
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${
                dark ? ' bg-gray-100 text-gray-800' : ' bg-gray-800'
              }`}>
              Notify me
            </button>
          </div>
        </form>

        <div className="absolute right-5 bottom-5 md:right-10 md:bottom-10">
          <Sparkles>
            <button onClick={() => setDark((d) => !d)}>{dark ? 'Light' : 'Dark'} Mode</button>
          </Sparkles>
        </div>
      </main>
    </>
  )
}
