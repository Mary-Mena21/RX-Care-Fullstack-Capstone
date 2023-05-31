import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Setup
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login3D.css";
import LoginBackGroundPhoto from "../images/LoginBackGroundPhoto.jpg";
import moon from "../images/moon.jpg";
import space from "../images/space.jpg";
import normal from "../images/normal.jpg";
import { Link } from "react-router-dom";
import { Login } from "./Login";
//-------------------------------------------------------
export const Login3D = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector("#bg"),
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        camera.position.setX(-3);

        renderer.render(scene, camera);

        const pointLight = new THREE.PointLight(0xe8eacc);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({
                color: 0x009688,
            });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(1500)
            .fill()
            .forEach(addStar);

        // Background
        const spaceTexture = new THREE.TextureLoader().load(
            LoginBackGroundPhoto
        );
        scene.background = spaceTexture;

        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;
            camera.position.z = t * -0.01;
            camera.position.x = t * -0.0002;
            camera.rotation.y = t * -0.0002;
        }

        document.body.onscroll = moveCamera;
        moveCamera();
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();
    }, []);
    return (
        <>
            <canvas id="bg"></canvas>

            <main className="login_main">
                <header>
                    <h1 className="shadows">RX-CARE</h1>
                </header>

                <div className="login-3d">
                    <Login />
                </div>
            </main>
        </>
    );
};
