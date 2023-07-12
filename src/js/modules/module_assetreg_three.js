import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

let mixer;

const clock = new THREE.Clock();

container_3d = document.getElementById('module-assetreg-desc-panel_tab-3d_view');
rect1 = document.getElementById('e-content-module-assetreg-detail-asset_img_tab_2').getBoundingClientRect();
console.log(rect1);

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize((rect1.width), 685);
renderer.outputEncoding = THREE.sRGBEncoding;
container_3d.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

camera = new THREE.PerspectiveCamera(40, (rect1.width) / 685, 1, 100);
camera.position.set(5, 2, 8);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = true;
controls.enableDamping = true;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('src/js/lib/three/jsm/libs/draco/gltf/');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.load('assets/3dmodels/gltf/LittlestTokyo.glb', function (gltf) {

  const model = gltf.scene;
  model.position.set(1, 1, 0);
  model.scale.set(0.01, 0.01, 0.01);
  scene.add(model);

  mixer = new THREE.AnimationMixer(model);
  mixer.clipAction(gltf.animations[0]).play();

  animate();

}, undefined, function (e) {

  console.error(e);

});


window.onresize = function () {
  rect1 = document.getElementById('e-content-module-assetreg-detail-asset_img_tab_2').getBoundingClientRect();
  camera.aspect = (rect1.width) / 685;
  camera.updateProjectionMatrix();
  renderer.setSize((rect1.width), 685);
};

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  mixer.update(delta);
  controls.update();
  renderer.render(scene, camera);
}

