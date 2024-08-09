
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
camera.position.z = 2;

const light = new THREE.SpotLight(0xffffff, Math.PI * 20)
light.position.set(5, 5, 5)
scene.add(light)



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
loader.load('wheel.glb', function(gltf) {
    let wheel = gltf.scene;
    scene.add(gltf.scene);

    function animate() {
        wheel.rotation.x += 0.01;
        wheel.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    
    renderer.setAnimationLoop(animate);

}, undefined, function (error) {
    console.error(error);
});
