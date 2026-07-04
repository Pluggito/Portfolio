"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/pexels-view2020-5508355.jpg"
              alt="Carew Abdul Mojeed"
              width={700}
              height={700}
              className="object-cover object-center w-full h-full"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl text-[#b30d0d] md:text-4xl font-bold font-inter"
            >
              About Me
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="h-1 w-20 bg-secondary"
            />

            <motion.p
              variants={itemVariants}
              className="text-lg font-grotesk text-muted-foreground"
            >
              I&apos;m a Full-Stack Engineer and product thinker based in Lagos,
              Nigeria. I build production-ready applications that solve real
              problems — from fintech platforms handling real transactions to
              AI-powered tools that make complex technology accessible to
              everyday users.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-grotesk text-muted-foreground"
            >
              Currently serving as CTO of{" "}
              <Link
                href="https://chowvest-prod.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b30d0d] font-medium hover:underline"
              >
                Chowvest
              </Link>
              , a food price-locking platform helping low-income households in
              Lagos fight food inflation. I&apos;ve been shipping full-stack
              products since 2022 across fintech, social, and AI — specialising
              in React, Next.js, Node.js, and scalable architecture.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 font-grotesk">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <ul className="space-y-3">
                {[
                  "Product thinking before engineering",
                  "Shipping fast, iterating on real feedback",
                  "Building for users who don't look like me",
                  "Clean architecture that scales when it needs to",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                asChild
                className="mt-6 py-6 hover:border-accent-background hover:bg-background text-accent bg-inherit cursor-pointer shadow-lg"
              >
                <Link
                  href="/Resume_Carew_Abdul_Mojeed.docx.pdf"
                  target="_blank"
                  download
                >
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