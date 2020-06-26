import * as THREE from 'three';

let geometry = new THREE.SphereGeometry(10, 32, 32);
let material = new THREE.MeshPhongMaterial();
// material.map = THREE.ImageUtils.loadTexture('./static/maps/earthmap.jpg');

export let earthmesh = new THREE.Mesh(geometry, material);
