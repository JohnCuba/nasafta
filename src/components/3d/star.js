import * as THREE from 'three';

export default function getStar() {
  let geometry = new THREE.IcosahedronGeometry(1, 1);
  let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  let star = new THREE.Mesh( geometry, material );

  return star;
};
