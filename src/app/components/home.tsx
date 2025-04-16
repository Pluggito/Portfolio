"use client";

import { useEffect, useRef, useState } from "react";
import Button2 from "./button2";
import Navbar from "./navmenu";
import ThreeJSModelOnBackground from "./threejsmodel";
import {  motion } from "framer-motion";
import MobileMenu from "./mobilemenu";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <div className="relative w-full h-screen overflow-hidden" id="home"
    >{isMobile ? <MobileMenu/> : <Navbar/>}      
      <div
      >
    {/* 3D Model Background */}
    <ThreeJSModelOnBackground
        backgroundImage="/adrien-olichon-RCAhiGJsUUE-unsplash.jpg"
        modelPath="/3d/tenhun_falling_spaceman_fanart.glb"
        modelPosition={{ x: 1.7, y: 0, z: 1.1 }}
        modelRotation={{ x: 20, y: -30, z: 5 }}
        modelScale={1.8}
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-[30%] left-6 sm:left-16 z-20 text-white max-w-xl tracking-wide"
      >
        <h3 className="text-base my-3 px-1 sm:my-1 sm:text-lg font-bold text-gray-300">
          <span className="text-[#b30d0d]">Software</span> Developer
        </h3>
        <h1 className="text-4xl sm:text-7xl font-extrabold leading-tight my-2 w-full font-inter">
          Hey There,  <br /> I'm <span className="text-[#b30d0d] opacity-80">Carew</span>
          <br />
        </h1>
        <h5 className="max-w-md text-base font-grotesk px-1 sm:px-2">Great web design without functionality is like a sports car with no engine</h5>
        
        {/*<p className="my-4 text-sm font-grotesk sm:text-base text-gray-300 px-1 sm:px-2 max-w-md">
          I build beautiful interfaces and interactive experiences with React, Three.js, and modern web tools.
        </p>*/}

        {/* CTA Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button2/>
        </motion.a>
      </motion.div>
      </div>      
    </div>
  );
}
