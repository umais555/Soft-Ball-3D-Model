import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { motion } from "framer-motion";

const ModelSection = () => {
  const modelContainerRef = useRef(null);
  const modelRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const ballsRef = useRef([]);
  const [, setSceneReady] = useState(false);

  useEffect(() => {
    if (!modelContainerRef.current) return;

    if (sceneRef.current) {
      rendererRef.current.dispose();
      sceneRef.current = null;
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      modelContainerRef.current.clientWidth / modelContainerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 8);
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      modelContainerRef.current.clientWidth,
      modelContainerRef.current.clientHeight
    );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    modelContainerRef.current.innerHTML = "";
    modelContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const floorGeometry = new THREE.PlaneGeometry(20, 20);
    const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    scene.add(floor);

    const loader = new FBXLoader();
    loader.load(
      "./test.fbx",
      (object) => {
        object.scale.set(0.05, 0.05, 0.05);
        object.position.set(0, 2, 0);

        object.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xff0000),
              });
            }
          }
        });

        scene.add(object);
        modelRef.current = object;
        setSceneReady(true);
      },
      (xhr) => {
        console.log(`🔄 Loading FBX: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}%`);
      },
      (error) => {
        console.error("❌ Error loading FBX model:", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.minDistance = 2;
    controls.maxDistance = 15;
    controlsRef.current = controls;

    for (let i = 0; i < 15; i++) {
      const ballGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const ballMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(Math.random(), Math.random(), Math.random()),
      });
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.set(
        (Math.random() - 0.5) * 10,
        Math.random() * 5,
        (Math.random() - 0.5) * 10
      );
      ball.castShadow = true;
      scene.add(ball);
      ballsRef.current.push(ball);
    }

    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textOptions = {
          font,
          size: 0.3,
          height: 0.05,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.01,
          bevelSegments: 5,
        };

        const createText = (text, position) => {
          const textGeometry = new TextGeometry(text, textOptions);
          const textMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);
          textMesh.position.set(position.x, position.y, position.z);
          textMesh.castShadow = true;
          scene.add(textMesh);
        };

        createText("Home Plate", { x: 0, y: 5, z: 0 });
        createText("Pitcher", { x: 0, y: -0.5, z: 0 });
        createText("First Base", { x: 5, y: 1, z: 0 });
        createText("Third Base", { x: -5, y: 1, z: 0 });
        createText("Outfield", { x: 0, y: 1, z: 5 });
        createText("Backstop", { x: 0, y: 1, z: -5 });
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child.isMesh && child.material) {
            const time = Date.now() * 0.001;
            const hue = (time / 10) % 1;
            child.material.color.setHSL(hue, 1, 0.5);
          }
        });
      }

      ballsRef.current.forEach((ball) => {
        ball.position.y -= 0.02;
        if (ball.position.y < -0.5) {
          ball.position.y = Math.random() * 5;
          ball.position.x = (Math.random() - 0.5) * 10;
          ball.position.z = (Math.random() - 0.5) * 10;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!modelContainerRef.current) return;
      camera.aspect =
        modelContainerRef.current.clientWidth / modelContainerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        modelContainerRef.current.clientWidth,
        modelContainerRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[800px] flex justify-center items-center bg-gray-100 rounded-lg overflow-hidden mt-20 relative">
   
      <motion.div
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-lg shadow-md"
        initial={{ x: 0 }} 
        animate={{ x: ['-0.5%', '0.5%', '-0.5%'] }} 
        transition={{
          duration: 2, 
          ease: "easeInOut",
          repeat: Infinity, 
        }}
      >
        <h1 className="text-xl font-medium leading-tight tracking-tight">
          Baseball Field Exploration
        </h1>
        <p className="mt-2 text-sm font-light">
          Explore the key components of a baseball field through an immersive 3D model.
        </p>
      </motion.div>

      <div
        ref={modelContainerRef}
        className="w-full h-[700px] bg-gray-100 rounded-lg overflow-hidden relative"
      ></div>

      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 text-center text-black px-6 py-4 rounded-lg shadow-md w-3/4 max-w-lg"
        style={{
          background: "linear-gradient(45deg, #ff7f50, #1e90ff, #32cd32, #ff1493, #00fa9a)",
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 6s ease infinite",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-lg font-semibold">Baseballs Hitting and Spreading</h2>
        <p className="mt-2 text-sm font-light">
          The baseballs dynamically interact with the environment, scattering unpredictably across the field. Their movement mimics the excitement and unpredictability of a real baseball game, adding energy to the scene.
        </p>
      </motion.div>

      <style>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ModelSection;
