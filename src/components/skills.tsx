'use client';

import React from 'react';
import { Code2, Database, Zap, Brain, Wrench, Palette, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
  highlight?: boolean;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const TiltCard = ({ category }: { category: TechCategory }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    setRotateX(yPct * 15);
    setRotateY(xPct * -15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 transition-colors duration-500 hover:border-red-900/50 shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-red-500/20 transition-colors">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white">
              {category.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/5 border border-white/5 text-gray-300 rounded-full text-sm font-medium hover:text-white hover:bg-white/10 hover:border-red-500/30 shadow-[0_0_8px_rgba(239,68,68,0.15)] hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-colors duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TechStack: React.FC = () => {
  const categories: TechCategory[] = [
    {
      title: 'Backend',
      icon: <Code2 className="w-6 h-6 text-green-500" />,
      technologies: [
        'Python',
        'Django',
        'RestAPI',
        'FastAPI',
        'Flask',
        'Node.js',
        'Express.js',
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6 text-blue-500" />,
      technologies: [
        'MySQL',
        'PostgreSQL',
        'Supabase',
        'MongoDB',
        'Prisma',
      ],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6 text-sky-500" />,
      technologies: [
        'React Native',
        'Flutter',
        'iOS (Swift)',
        'Android (Kotlin)',
        'Expo',
      ],
    },
    {
      title: 'AI & ML',
      icon: <Brain className="w-6 h-6 text-pink-500" />,
      technologies: [
        'OpenAI API',
        'Google Gemini API',
        'LangChain',
        'Prompt Engineering',
        'Context Engineering',
        'AI Integration',
      ],
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="w-6 h-6 text-gray-500" />,
      technologies: [
        'Terminal </>',
        'VS Code',
        'Git',
        'GitHub',
        'Linux (Ubuntu)',
        'Postman',
        'Swagger UI',
      ],
    },
    {
      title: 'Frontend',
      icon: <Palette className="w-6 h-6 text-purple-500" />,
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Vite',
      ],
    },
  ];

  return (
    <section className="w-full py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*-----Title----- */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#b30d0d]">
            Tech Stack
          </h1>
          <p className="text-lg text-muted-foreground font-grotesk max-w-2xl mx-auto">
            My toolkit for building scalable, production-ready software. Always learning and adapting to new technologies.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <TiltCard key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
