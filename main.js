import * as THREE from 'three'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const canvas = document.querySelector('canvas')

// Create Scene
const scene = new THREE.scene()

// Set Path to follow
const pointers = [
  new THREE.Vector3(10, 0, 10),
  new THREE.Vector3(-5, -5, -5),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, -5, 5),
  new THREE.Vector3(10, 0, 10)
]

const path = new THREE.CatmullRomCurve3(points)

