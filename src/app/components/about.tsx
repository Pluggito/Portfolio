'use client'

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  console.log('hey Nextjs')

  return (
    <section className="py-20 px-4 md:px-8 " id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src={`/pexels-view2020-5508355.jpg `.trimEnd() }
              alt="Profile" 
              width={700}
              height={700}
              className="object-cover object-center w-full h-full "
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h2 variants={itemVariants} className="text-3xl text-[#b30d0d] md:text-4xl font-bold font-inter">
              About Me
            </motion.h2>

            <motion.div variants={itemVariants} className="h-1 w-20 bg-secondary"></motion.div>
            <div className="">
            <motion.p variants={itemVariants} className="text-lg font-grotesk  text-muted-foreground">
              I'm a creative developer with a passion for building beautiful, functional digital experiences. With
              expertise in both design and development, I bridge the gap between aesthetics and functionality.
            </motion.p>
            </div>
            <div>
            <motion.p variants={itemVariants} className="text-lg font-grotesk  text-muted-foreground">
              My journey in tech began in 2022, and since then, I've worked with startups, agencies, and established
              companies to create impactful digital solutions. I specialize in interactive web experiences
              and motion design.
            </motion.p>
            </div>
            

            <motion.div variants={itemVariants} className="pt-4 font-grotesk ">
              <h3 className="text-xl font-semibold mb-4 ">My Approach</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                  <span>User-centered design thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                  <span>Performance-focused development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                  <span>Continuous learning and improvement</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary"></span>
                  <span>Collaborative problem solving</span>
                </li>
              </ul>
              <Button variant="outline" asChild className="mt-3 py-6 hover:border-accent-background hover:bg-background text-accent bg-inherit cursor-pointer shadow-lg">
            <Link href={`Resume_org.docx`.trim()} target="_blank" download> 
                Download Resume <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
            </Button>
            </motion.div>
          </div>
        </motion.div>
       
      </div>
    </section>
    
  );
};

export default About; 