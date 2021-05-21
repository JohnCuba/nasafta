import * as THREE from 'three';
import '../../assets/maps/earth.jpg'
import earth_atmos from '../../assets/textures/earth_atmos_2048.jpg?url'
import earth_specular from '../../assets/textures/earth_specular_2048.jpg?url'
import earth_normal from '../../assets/textures/earth_normal_2048.jpg?url'

export default class Earth {
  textureLoader = new THREE.TextureLoader();
  materialNormalMap = new THREE.MeshPhongMaterial( {
    specular: 0x333333,
    shininess: 15,
    color:0xF06565,
    map: this.textureLoader.load('public/textures/earth_atmos_2048.jpg'),
    // specularMap: this.textureLoader.load( earth_specular ),
    // normalMap: this.textureLoader.load( earth_normal ),

    // y scale is negated to compensate for normal map handedness.
    normalScale: new THREE.Vector2( 0.85, - 0.85 )
  } );

  geometry = new THREE.SphereGeometry( 6371, 100, 50 );

  meshPlanet = new THREE.Mesh( this.geometry, this.materialNormalMap );

  getEarth() {
    console.log(earth_atmos)
    this.meshPlanet.rotation.y = 0;
    this.meshPlanet.rotation.z = 0.41;

    this.meshPlanet.material.needsUpdate = true
    return this.meshPlanet
  }
}
