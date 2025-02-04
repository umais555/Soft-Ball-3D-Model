import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ExtraModelSection = () => {
  const modelContainerRef = useRef(null);
  const modelRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const floorRef = useRef(null);
  const ballsRef = useRef([]);
  const [sceneReady, setSceneReady] = useState(false);

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
    camera.position.set(0, 3, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Set Renderer
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

    const floorGeometry = new THREE.CircleGeometry(6, 64);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: "#FFFFFF",
      transparent: false,
      emissive: "#FFFFFF",
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.2;
    floor.receiveShadow = true;
    scene.add(floor);
    floorRef.current = floor;

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
              child.material = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xff0000) });
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
    controls.maxDistance = 10;
    controlsRef.current = controls;

    const animate = () => {
      requestAnimationFrame(animate);

      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child.isMesh && child.material) {
            const time = Date.now() * 0.001;
            const hue = ((time / 10) % 1);
            child.material.color.setHSL(hue, 1, 0.5);
          }
        });
      }

      ballsRef.current.forEach(({ ball, velocity }) => {
        ball.position.add(velocity);
        velocity.y -= 0.002;
        if (ball.position.y < -5) {
          scene.remove(ball);
        }
      });

      // Create a gradient effect for the background using a canvas texture
      const time = Date.now() * 0.001;
      const hue1 = (time * 0.05) % 1; // First hue
      const hue2 = (time * 0.05 + 0.5) % 1; // Second hue (shifted for contrast)

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 512;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, new THREE.Color().setHSL(hue1, 1, 0.5).getStyle());
      gradient.addColorStop(1, new THREE.Color().setHSL(hue2, 1, 0.5).getStyle());

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const texture = new THREE.CanvasTexture(canvas);
      scene.background = texture;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!modelContainerRef.current) return;
      camera.aspect = modelContainerRef.current.clientWidth / modelContainerRef.current.clientHeight;
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
    <div
      ref={modelContainerRef}
      className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden mt-10"
      style={{ height: "80vh", cursor: sceneReady ? "pointer" : "wait" }}
    ></div>
  );
};

export default ExtraModelSection;
