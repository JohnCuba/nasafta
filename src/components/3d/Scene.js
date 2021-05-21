import * as THREE from 'three';
import getEarth from './Earth';

export default class SceneManadger {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer();
  light = new THREE.DirectionalLight( 0xffffff );

  constructor() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.light.position.set( 5, 5, 5 ).normalize();
    this.scene.add(this.light);

    this.addObject(getEarth());

    this.camera.position.z = 5;
  }

  init(element) {
    element.appendChild(this.renderer.domElement)
    this._render()
  }

  addObject(object) {
    this.scene.add(object)
  }

  _render() {
    this.renderer.render( this.scene, this.camera )
  }
}
