"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Toggle } from "@/components/ui/toggle"
import { Home, User, Briefcase, Mail, FileText, Instagram, Twitter, Linkedin, Github, MoreHorizontal } from "lucide-react"
import '../globals.css'

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FileText },
  { name: "Contact", href: "#contact", icon: Mail },
]

const socialItems = [
  { name: "Instagram", href: "https://instagram.com/callmecarew_", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/just_carew_", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/carew-abdul-mojeed", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/pluggito", icon: Github },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <div className="fixed inset-0 z-50 pointer-events-none md:hidden">
      <div className="absolute flex items-center top-4 right-4 pointer-events-auto">
        <h1 className="text-xl text bg-transparent">CAMO</h1>
        <Toggle
          pressed={isOpen}
          onPressedChange={toggleMenu}
          className="rounded-full bg-black text-white h-12 w-12 text-2xl shadow-lg"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <MoreHorizontal size={30} strokeWidth={1.5}/>
        </Toggle>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-gradient-to-br from-black to-gray-900 p-8 text-white pointer-events-auto"
          >
            <div className="mt-20 flex flex-1 flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold">Navigation</h2>
              </motion.div>

              <nav className="mb-8 flex-1">
                <ul className="space-y-4">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMenu}
                          className={`flex items-center rounded-lg p-2 text-lg ${
                            isActive ? "bg-white/10 font-medium text-white" : "text-gray-300 hover:text-white"
                          }`}
                        >
                          <Icon className="mr-3 h-5 w-5" />
                          {item.name}
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="ml-auto h-2 w-2 rounded-full bg-white"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-4"
              >
                <h2 className="text-xl font-bold">Connect</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex space-x-4"
              >
                {socialItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
