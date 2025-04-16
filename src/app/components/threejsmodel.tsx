"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion, useInView } from "framer-motion";
import '../globals.css'

const ThreeJSModelOnBackground = ({
  backgroundImage,
  modelPath,
  modelPosition,
  modelRotation,
  modelScale,
}) => {
  const mountRef = useRef(null);
  const modelRef = useRef(null);
  const mixerRef = useRef(null);
  const clockRef = useRef(new THREE.Clock());
  const animationFrameRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const [loadedBackground, setLoadedBackground] = useState(false);
  

  // Lazy load background image
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setLoadedBackground(true);
        observer.disconnect();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "100px", // Trigger before entering viewport
    });
    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Scene setup and model loading
  useEffect(() => {
    const currentMount = mountRef.current;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    currentMount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    cameraRef.current = camera;
    camera.position.z = 7;
    camera.position.x = -1;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0x00ffff, 0.5); // Teal color
    rimLight.position.set(-1, 0, -1);
    scene.add(rimLight);

    const leftLight = new THREE.DirectionalLight(0xffffff, 0.7);
    leftLight.position.set(-3, 0, 2);
    scene.add(leftLight);

    // Load GLTF model
    if (modelPath) {
      const loader = new GLTFLoader();
      loader.load(
        modelPath,
        (gltf) => {
          const model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());

          model.position.set(
            modelPosition.x - center.x,
            modelPosition.y - center.y,
            modelPosition.z - center.z
          );

          model.rotation.set(
            THREE.MathUtils.degToRad(modelRotation.x),
            THREE.MathUtils.degToRad(modelRotation.y),
            THREE.MathUtils.degToRad(modelRotation.z)
          );

          model.scale.set(modelScale, modelScale, modelScale);
          modelRef.current = model;
          scene.add(model);

          // Check if the model has animations
          if (gltf.animations && gltf.animations.length > 0) {
            mixerRef.current = new THREE.AnimationMixer(model);
            const action = mixerRef.current.clipAction(gltf.animations[0]);
            action.play();
          } else {
            createIdleAnimation(model);
          }

          startAnimationLoop(scene, camera, renderer);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error("Error loading model:", error);
        }
      );
    }

    // Create a custom idle animation
    const createIdleAnimation = (model) => {
      mixerRef.current = new THREE.AnimationMixer(model);

      const positionKF = new THREE.VectorKeyframeTrack(
        ".position",
        [0, 1, 2],
        [
          model.position.x,
          model.position.y,
          model.position.z,
          model.position.x,
          model.position.y + 0.2,
          model.position.z,
          model.position.x,
          model.position.y,
          model.position.z,
        ],
        THREE.InterpolateSmooth
      );

      const rotationKF = new THREE.VectorKeyframeTrack(
        ".rotation",
        [0, 1, 2],
        [
          model.rotation.x,
          model.rotation.y,
          model.rotation.z,
          model.rotation.x,
          model.rotation.y + 0.1,
          model.rotation.z,
          model.rotation.x,
          model.rotation.y,
          model.rotation.z,
        ],
        THREE.InterpolateSmooth
      );

      const clip = new THREE.AnimationClip("idle", 4, [positionKF, rotationKF]);
      const action = mixerRef.current.clipAction(clip);
      action.play();
    };

    // Animation loop
    const startAnimationLoop = (scene, camera, renderer) => {
      const animate = () => {
        if (mixerRef.current) {
          const delta = clockRef.current.getDelta();
          mixerRef.current.update(delta);
        }

        if (modelRef.current) {
          modelRef.current.rotation.y += 0.002;
        }

        renderer.render(scene, camera);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && currentMount) {
        cameraRef.current.aspect = currentMount.clientWidth / currentMount.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);

        if (modelRef.current) {
          if (currentMount.clientWidth < 768) {
            modelRef.current.position.x = 0.5; // Bring model closer on mobile
          }if(currentMount.clientWidth > 768 && currentMount.clientWidth < 1024){
            modelRef.current.position.x = 1.5;
          } else if (currentMount.clientWidth > 1024) {
            modelRef.current.position.x = 2; // Reset on larger screens
          }
        }

        renderer.render(sceneRef.current, cameraRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
      currentMount.removeChild(renderer.domElement);
    };
  }, [modelPath, modelPosition, modelRotation, modelScale]);

  const headerRef = useRef(null)
  const isInView = useInView(headerRef, {once: false})



  return (
    <motion.div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundImage: loadedBackground ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        transition: "background-image 0.5s ease-in-out",
      }}
      ref={headerRef}
      initial={{ opacity: 1, scale: 1}}
      animate={isInView ? { opacity: 1, scale: 1 }: {opacity:0, scale: 1.5}}
      transition={{ duration: 0.6, ease: 'easeInOut'}}>
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      />
    </motion.div>
  );
};

export default ThreeJSModelOnBackground;
