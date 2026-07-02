"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
  url: string;
  sourceCode: string;
}

const projects = [
  {
    id: "1",
    title: "Chowvest",
    description:
      "A food savings platform that helps users turn their savings into guaranteed food on their table every season. Features include savings tracking, wallet management, food basket goals with progress monitoring, automated delivery requests, and multi-item goal planning for staple foods like rice, beans, and garri.",
    image: "/Screenshot 2025-12-21 145444.png",
    date: "December 2025",
    tags: [
      "Next.js",
      "Paystack",
      "Tailwind CSS",
      "Financial Tech",
      "Supabase",
      "NextAuth",
    ],
    url: "https://chowvest-prod.vercel.app",
    sourceCode: "https://github.com/Pluggito/chowvest_production",
  },
  {
    id: "2",
    title: "Doculens",
    description:
      "An AI-powered Document Intelligence Platform that automatically classifies, processes, and extracts structured data from documents like invoices, receipts, and CVs. Features include an OCR extraction pipeline, a seamless web dashboard, and a native mobile application.",
    image: "/Screenshot 2026-07-02 at 15.30.44.png",
    date: "July 2026",
    tags: ["Next.js", "React Native", "Gemini AI", "Turborepo", "Tailwind CSS", "Neon DB"],
    url: "https://docu-lens-web.vercel.app/",
    sourceCode: "https://github.com/Pluggito/document-intel-monorepo",
  },
   {
    id: "3",
    title: "Dailies",
    description:
      "A social media platform focused on capturing daily moments. Users can post quick updates, share photos, and connect with friends in a minimalist, distraction-free environment. Features include daily posting limits, chronological feeds, and a focus on authenticity over curated perfection.",
    image: "/Screenshot 2025-12-21 151114.png",
    date: "April 2025",
    tags: ["Next.js", "Supabase", "Prisma", "Tailwind CSS", "WebSockets"],
    url: "https://dailies-social.vercel.app",
    sourceCode: "https://github.com/Pluggito/Dailies",
  },
  {
    id: "4",
    title: "Moooments",
    description:
      "A privacy-first photo-sharing platform for events. Attendees can upload photos on the event day, share private albums, and enjoy seamless file optimization. Features shared albums, photo upload limits, organizer permissions, and storage upgrade options.",
    image: "/Screenshot 2025-04-15 231852.png",
    date: "January 2025",
    tags: ["React", "Django", "AWS", "Tailwind CSS"],
    url: "https://moooments.vercel.app/",
    sourceCode: "https://github.com/Pluggito/Moooments",
  },
  {
    id: "5",
    title: "Lovegram",
    description:
      "A beautiful, interactive web application that generates personalized Valentine's Day messages using AI. Create heartfelt messages for your crush, partner, situationship, or even your bros!",
    image: "/Screenshot 2026-02-28 at 22.18.29.png",
    date: "February 2026",
    tags: ["Nextjs", "Open-ai API", "Gemini API", "Tailwind CSS"],
    url: "https://lovegram-ruddy.vercel.app/",
    sourceCode: "https://github.com/Pluggito/valentine-v2",
  },
  
];

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#b30d0d]">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground font-grotesk max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique
            challenge and solution.
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
  );
};

const ProjectItem = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col gap-8 md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
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
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Calendar className="h-4 w-4" />
          {project.date}
        </motion.div>
        <motion.h3
          variants={itemVariants}
          className="mt-2 text-2xl font-bold md:text-3xl"
        >
          {project.title}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-muted-foreground"
        >
          {project.description}
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-6 flex flex-wrap gap-2"
        >
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
            <Link
              href={`${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant={"secondary"}
            className="mt-8 w-fit gap-1 ml-4"
          >
            <Link
              href={`${project.sourceCode}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
