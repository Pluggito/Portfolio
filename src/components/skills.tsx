'use client'

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Layers, Database, Globe, Cpu, Smartphone, Lightbulb } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: <Code className="h-8 w-8" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "3D & Interactive",
    icon: <Layers className="h-8 w-8" />,
    items: ["Three.js", "WebGL", "GLSL", "React Three Fiber", "3D Modeling"],
  },
  {
    name: "Design",
    icon: <Palette className="h-8 w-8" />,
    items: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Motion Design", "Design Systems"],
  },
  {
    name: "Backend Development",
    icon: <Database className="h-8 w-8" />,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    name: "Web Technologies",
    icon: <Globe className="h-8 w-8" />,
    items: ["Progressive Web Apps", "SEO", "Web Performance", "Accessibility", "Responsive Design"],
  },
  {
    name: "AI & Machine Learning",
    icon: <Cpu className="h-8 w-8" />,
    items: ["AI SDK", "TensorFlow.js", "Natural Language Processing", "Computer Vision", "Generative AI"],
  },
  {
    name: "Mobile Development",
    icon: <Smartphone className="h-8 w-8" />,
    items: ["React Native", "Expo", "Mobile-first Design", "App Performance", "Cross-platform"],
  },
  {
    name: "Soft Skills",
    icon: <Lightbulb className="h-8 w-8" />,
    items: ["Problem Solving", "Communication", "Project Management", "Team Collaboration", "Client Relations"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="py-20 px-4 md:px-8 " id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#b30d0d]">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground font-grotesk  max-w-2xl mx-auto">
            My technical toolkit and areas of expertise that I bring to every project.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-600 bg-[linear-gradient(120deg, rgba(255,255,255,0.5)),rgba(0,0,0,0.4),#b30d0d] cursor-pointer hover:scale-[1.05] hover:border-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">{skill.icon}</div>
                <h3 className="text-xl font-semibold font-grotesk ">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                    <span className="text-muted-foreground font-grotesk ">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 