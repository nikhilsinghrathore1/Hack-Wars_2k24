import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "../Experience/Utils/CustomOrbitControls.js";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.params = {
            fov: 75,
            aspect: this.sizes.aspect,
            near: 0.001,
            far: 1000,
        };
        this.controls = null;
        this.mouse = new THREE.Vector2();

        this.setPerspectiveCamera();
        this.setOrbitControls();
        this.addMouseMoveListener();
    }

    setPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            this.params.fov,
            this.params.aspect,
            this.params.near,
            this.params.far
        );

        this.perspectiveCamera.position.set(17.8838, 1.2 + 10, -3.72508);
        this.perspectiveCamera.rotation.y = Math.PI / 2;

        this.scene.add(this.perspectiveCamera);
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        // this.controls.enableZoom = true;
        this.controls.enablePan = false;
        // this.controls.maxPolarAngle = Math.PI / 2;
        // this.controls.minDistance = 0.1;
        this.controls.maxDistance = 6;

        this.controls.dampingFactor = 0.1;
    }

    addMouseMoveListener() {
        window.addEventListener("mousemove", (event) => {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.updateCameraPosition();
        });
    }

    updateCameraPosition() {
        const factor = 0.05; // Adjust this factor to control the sensitivity
        const targetX = this.mouse.x * factor;
        const targetY = this.mouse.y * factor;

        this.perspectiveCamera.position.x += (targetX - this.perspectiveCamera.position.x) * factor;
        this.perspectiveCamera.position.y += (targetY - this.perspectiveCamera.position.y) * factor;
    }

    enableOrbitControls() {
        this.controls.enabled = true;
    }

    disableOrbitControls() {
        this.controls.enabled = false;
    }

    onResize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
    }

    update() {
        if (!this.controls) return;
        if (this.controls.enabled === true) {
            this.controls.update();
        }
    }
}
