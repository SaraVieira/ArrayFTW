/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import usePrefersReducedMotion from './Hooks/usePreferesReducedMotion'

export default function Model(props) {
  const group = useRef()
  const prefersReducedMotion = usePrefersReducedMotion()
  const { nodes } = useGLTF('/array-processed.glb')

  useFrame((state) => {
    if (!prefersReducedMotion) {
      group.current.children.forEach((child, index) => {
        child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 50
        child.rotation.x += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000
        child.rotation.y += (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000
        child.rotation.z += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000
      })
    }
  })

  const material = props.dark
    ? new THREE.MeshPhysicalMaterial({
        color: '#0a0a0a',
        roughness: 0.8,
      })
    : nodes.Cube.material

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={material} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={material} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.laptop.geometry} material={material}></mesh>
      <mesh castShadow receiveShadow geometry={nodes.open_square.geometry} material={material} />
      <mesh castShadow receiveShadow geometry={nodes.squiare.geometry} material={material} />
      <mesh castShadow receiveShadow geometry={nodes.curly.geometry} material={material} />
      <mesh castShadow receiveShadow geometry={nodes.curly001.geometry} material={material} />

      <mesh castShadow receiveShadow geometry={nodes.node.geometry} material={material} />
      <mesh castShadow receiveShadow geometry={nodes.react.geometry} material={material} />
      <mesh castShadow receiveShadow geometry={nodes.vue.geometry} material={material} />
    </group>
  )
}

useGLTF.preload('/array-processed.glb')
