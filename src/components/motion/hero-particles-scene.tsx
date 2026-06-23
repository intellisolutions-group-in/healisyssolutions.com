'use client'

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 420
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.04
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color='#3397ff'
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  )
}

const HeroParticlesScene = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 55 }}
    dpr={[1, 1.5]}
    gl={{ antialias: false, alpha: true }}
  >
    <ParticleField />
  </Canvas>
)

export default HeroParticlesScene
