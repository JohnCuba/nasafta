import * as THREE from 'three';
// const map = require('../../static/maps/earth.jpg');

export default function getEarth() {
  let loader = new THREE.TextureLoader()
  let geometry = new THREE.SphereGeometry(2.5, 32, 32);
  let material = new THREE.MeshPhongMaterial()
  // console.log(map);
  // loader.load(
    // map,
  //   (texture) => {
  //     material = new THREE.MeshPhongMaterial({map: texture})
  //   }
  // )

  return new THREE.Mesh(geometry, material);
}
