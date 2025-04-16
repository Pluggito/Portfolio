"use client";

import { useEffect, useState } from "react";
import Button2 from "./button2";
import Navbar from "./navmenu";
import ThreeJSModelOnBackground from "./threejsmodel";
import { motion } from "framer-motion";
import MobileMenu from "./mobilemenu";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      {isMobile ? <MobileMenu /> : <Navbar />}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <ThreeJSModelOnBackground
          backgroundImage="/adrien-olichon-RCAhiGJsUUE-unsplash-min.jpg"
          modelPath="/3d/tenhun_falling_spaceman_fanart.glb"
          modelPosition={{ x: 1.7, y: 0, z: 1.1 }}
          modelRotation={{ x: 20, y: -30, z: 5 }}
          modelScale={1.8}
        />
      </motion.div>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="absolute top-[30%] left-6 sm:left-16 z-20 text-white max-w-xl tracking-wide"
      >
        <motion.h3
          variants={itemVariants}
          className="text-base my-3 px-1 sm:my-1 sm:text-lg font-bold text-gray-300"
        >
          <span className="text-[#b30d0d]">Software</span> Developer
        </motion.h3>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-7xl font-extrabold leading-tight my-2 w-full font-inter"
        >
          Hey There, <br /> I'm{" "}
          <span className="text-[#b30d0d] opacity-80">Carew</span>
          <br />
        </motion.h1>

        <motion.h5
          variants={itemVariants}
          className="max-w-md text-base font-grotesk px-1 sm:px-2"
        >
          Great web design without functionality is like a sports car with no
          engine
        </motion.h5>

        <motion.a
          variants={itemVariants}
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button2 />
        </motion.a>
      </motion.div>
    </div>
  );
}
