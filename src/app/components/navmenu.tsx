'use client'

import { Button } from "@/components/ui/button"
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface TabProps {
    children: React.ReactNode;
    setPosition: (position: { left: number; width: number; opacity: number }) => void;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
    const ref = useRef<HTMLLIElement | null>(null);
  
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

interface CursorProps {
    position: { left: number; width: number; opacity: number };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
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
        </div>     
    </nav>
  )
}

export default Navbar
