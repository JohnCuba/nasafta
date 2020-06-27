<script>
import {onMount} from 'svelte';
import * as THREE from 'three';
import getEarth from './Earth';
import getStar from './star';

onMount(() => {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('root').appendChild(renderer.domElement);
  let light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 5, 5, 5 ).normalize();
  scene.add(light);


  // let geometry = new THREE.BoxGeometry();
  // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // let cube = new THREE.Mesh( geometry, material );
  let earth = getEarth();
  scene.add( earth );

  camera.position.z = 5;

  function animate() {
    // requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate();
});
</script>


<main id='root' >
  <slot></slot>
</main>

<style>
#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
