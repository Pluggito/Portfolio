"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Calendar, Tag } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  image: string
  date: string
  tags: string[]
  url: string
}

const projects = [
  {
    id: "1",
    title: "Moooments",
    description:
      "A privacy-first photo-sharing platform for events. Attendees can upload photos on the event day, share private albums, and enjoy seamless file optimization. Features shared albums, photo upload limits, organizer permissions, and storage upgrade options.",
    image: "/Screenshot 2025-04-15 231852.png",
    date: "January 2025",
    tags: ["React", "Django", "AWS", "Tailwind CSS"],
    url: "https://moooments.vercel.app/",
  },
  {
    id: "2",
    title: "HatsOffwears",
    description:
      "An elegant fashion storefront with a strong brand identity. Designed with a focus on aesthetics and simplicity. Includes a responsive image gallery, floating product labels, and Flutterwave integration for seamless checkout.",
    image: "/Screenshot 2025-04-15 232347.png",
    date: "October 2024",
    tags: ["React", "Tailwind CSS", "Flutterwave"],
    url: "https://hatsoff-wears.vercel.app/",
  },
  {
    id: "3",
    title: "AI Generated Messages App",
    description:
      "A cute and interactive Valentine's countdown site that generates personalized heartfelt messages using AI. Features a countdown timer, bunny animation, and Gemini API-powered love notes after entering your crush's name.",
    image: "/Screenshot 2025-04-15 235823.png",
    date: "February 2025",
    tags: ["React", "Gemini API"],
    url: "https://valentine-messages.vercel.app/",
  },
  
]

const Features = () => {
  return (
    <main className="px-4 md:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/*-----Title----- */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#b30d0d]">Featured Projects</h1>
          <p className="text-lg text-muted-foreground font-grotesk max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col gap-24">
              {projects.map((project, index) => (
                <ProjectItem key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col gap-8 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div className="flex-1" variants={imageVariants}>
        <div className="overflow-hidden rounded-lg">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="h-full opacity-85 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
      <div className="flex flex-1 flex-col justify-center">
        <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {project.date}
        </motion.div>
        <motion.h3 variants={itemVariants} className="mt-2 text-2xl font-bold md:text-3xl">
          {project.title}
        </motion.h3>
        <motion.p variants={itemVariants} className="mt-4 text-muted-foreground">
          {project.description}
        </motion.p>
        <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.div
              key={tag}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: 0.1 * tagIndex },
                },
              }}
            >
              <Badge variant="secondary" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button asChild className="mt-8 w-fit gap-1">
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              View Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Features
