<script>
import {onMount} from 'svelte';
import * as THREE from 'three';
import {earthmesh} from './Earth.js';

onMount(() => {
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('root').appendChild(renderer.domElement);

  // let geometry = new THREE.BoxGeometry();
  // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // let cube = new THREE.Mesh( geometry, material );
  scene.add( earthmesh );

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
