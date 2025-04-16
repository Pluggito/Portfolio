'use client'

import { Button } from "@/components/ui/button"
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);
  
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block mx-auto cursor-pointer px-3 py-3 text-base text-secondary hover:text-accent-foreground pointer-events-auto "
      >
        {children}
      </li>
    );
  };



  const Cursor = ({ position }) => {
    return (
      <motion.li
        animate={{ ...position }}
        className="absolute z-0 h-10 rounded-full bg-accent"
      />
    );
  };

  const Menus = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ]

const Navbar = () => {
    const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeNav, setActiveNav] = useState(0);
  return (
    <nav className=" px-4 md:px-8 ">
        <div className="flex justify-center items-center absolute inset-0 z-11 w-full top-0 h-10 max-w-7xl mt-5 px-5 mx-auto">
            {/*<div>
                <p className="text-accent"></p>
            </div>*/}
            <ul className="text-accent flex rounded-full shadow-lg shadow-amber-50/20 justify-between bg-transparent px-1 items-center gap-9"
             onMouseLeave={() => {
                setPosition(prev => ({ ...prev, opacity: 0 }));
              }}>{Menus.map((item, index) => (
                <Tab key={item.href} setPosition={setPosition}>
                  <Link
                    href={item.href}
                    className={`nav-item transition-all duration-300  ${
                      activeNav === index ? "font-bold" : ""
                    }`}
                    onClick={() => setActiveNav(index)}
                  >
                    {item.label}
                  </Link>
                </Tab>
              ))}
              <Cursor position={position} />
            </ul>
            
           {/* <Button variant={"outline"} className="text-accent bg-accent-foreground hover:scale-[1.1] cursor-pointer py-5 hidden sm:flex">
            <a className="flex items-center gap-3" href="#contact">
            <div className="h-6 w-6">
          <img 
            src="data:image/png;base64,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" 
            alt="chat"
            className="invert transition-all duration-200 hover:fill-white"
          />
        </div>
                Let&apos;s talk
            </a>
            </Button>*/}
        </div>     
    </nav>
  )
}

export default Navbar
