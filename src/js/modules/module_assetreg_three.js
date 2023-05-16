// Three.js ray.intersects with offset canvas

import * as THREE from 'three';

const objects = [];

let count = 0;

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

// info
const info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '30px';
info.style.width = '100%';
info.style.textAlign = 'center';
info.style.color = '#f00';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Monospace';
info.innerHTML = 'INTERSECT Count: ' + count;
info.style.userSelect = "none";
info.style.webkitUserSelect = "none";
info.style.MozUserSelect = "none";
document.body.appendChild(info);

const container = document.getElementById('module-assetreg-desc-panel_tab-3d_view');

const cont_tab = document.getElementById('container_tab');

document.body.appendChild(container);

var rect1 = cont_tab.getBoundingClientRect();
console.log(rect1);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(rect1.width, rect1.height);

container.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, rect1.width/rect1.height, 1, 1000);
camera.position.y = 150;
camera.position.z = 500;
camera.lookAt(scene.position);
scene.add(camera);

scene.background = new THREE.Color( 0xffffff );
scene.add(new THREE.AmbientLight(0x222222));

const light = new THREE.PointLight(0xffffff, 1);
camera.add(light);

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(200, 200, 200, 1, 1, 1),
  new THREE.MeshPhongMaterial({
    color: 0x0080ff
  }));
scene.add(mesh);
objects.push(mesh);

// find intersections
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// mouse listener
document.addEventListener('mousedown', function(event) {

  // For the following method to work correctly, set the canvas position *static*; margin > 0 and padding > 0 are OK
  mouse.x = ((event.clientX - renderer.domElement.offsetLeft) / renderer.domElement.clientWidth) * 2 - 1;
  mouse.y = -((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.clientHeight) * 2 + 1;

  // For this alternate method, set the canvas position *fixed*; set top > 0, set left > 0; padding must be 0; margin > 0 is OK
  //mouse.x = ( ( event.clientX - container.offsetLeft ) / container.clientWidth ) * 2 - 1;
  //mouse.y = - ( ( event.clientY - container.offsetTop ) / container.clientHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {

    count = count + 1;
    info.innerHTML = 'INTERSECT Count: ' + count;

  }

}, false);

function render() {

  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);

}

function animate() {

  requestAnimationFrame(animate);

  render();

}

animate();
