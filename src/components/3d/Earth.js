import * as THREE from 'three';

export default function getEarth() {
  let loader = new THREE.TextureLoader()
  let geometry = new THREE.SphereGeometry(2.5, 32, 32);
  let material = new THREE.MeshPhongMaterial()
  loader.load(
    'src/static/maps/earth.jpg',
    (texture) => {
      material = new THREE.MeshPhongMaterial({map: texture})
    }
  )

  return new THREE.Mesh(geometry, material);
}
