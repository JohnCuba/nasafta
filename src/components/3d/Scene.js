import * as THREE from 'three';
import Earth from './Earth';

export default class SceneManadger {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 50, 1e7 );
  renderer = new THREE.WebGLRenderer();
  light = new THREE.DirectionalLight( 0xffffff );

  constructor() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.light.position.set( - 1, 0, 1 ).normalize();
    this.scene.add(this.light);

    this.addObject(new Earth().getEarth());

    this.camera.position.z = 31855;
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
