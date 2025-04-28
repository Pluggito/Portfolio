import { Code, Layout, Database, Smartphone, Bot, Globe, PenTool, Layers } from "lucide-react";

export default function SkillsTimeline() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      name: "3D & Interactive",
      skills: ["Three.js", "WebGL", "GLSL", "React Three Fiber", "3D Modeling"],
    },
    {
      name: "Design",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Motion Design", "Design Systems"],
    },
    {
      name: "Backend Development",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      name: "Web Technologies",
      skills: ["Progressive Web Apps", "SEO", "Web Performance", "Accessibility", "Responsive Design"],
    },
    {
      name: "AI & Machine Learning",
      skills: ["AI SDK", "TensorFlow.js", "NLP", "Computer Vision", "Generative AI"],
    },
    {
      name: "Mobile Development",
      skills: ["React Native", "Expo", "Mobile-first Design", "App Performance", "Cross-platform"],
    },
    {
      name: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Project Management", "Team Collaboration", "Client Relations"],
    },
  ];

  const skillIcons: { [key: string]: JSX.Element } = {
    "React": <Code size={16} />,
    "Next.js": <Code size={16} />,
    "TypeScript": <Code size={16} />,
    "Tailwind CSS": <Layout size={16} />,
    "Framer Motion": <Layout size={16} />,
    "Three.js": <Globe size={16} />,
    "WebGL": <Globe size={16} />,
    "GLSL": <Globe size={16} />,
    "React Three Fiber": <Globe size={16} />,
    "3D Modeling": <Globe size={16} />,
    "UI/UX Design": <PenTool size={16} />,
    "Figma": <PenTool size={16} />,
    "Adobe Creative Suite": <PenTool size={16} />,
    "Motion Design": <PenTool size={16} />,
    "Design Systems": <Layers size={16} />,
    "Node.js": <Database size={16} />,
    "Express": <Database size={16} />,
    "PostgreSQL": <Database size={16} />,
    "MongoDB": <Database size={16} />,
    "REST APIs": <Database size={16} />,
    "Progressive Web Apps": <Globe size={16} />,
    "SEO": <Globe size={16} />,
    "Web Performance": <Globe size={16} />,
    "Accessibility": <Globe size={16} />,
    "Responsive Design": <Globe size={16} />,
    "AI SDK": <Bot size={16} />,
    "TensorFlow.js": <Bot size={16} />,
    "NLP": <Bot size={16} />,
    "Computer Vision": <Bot size={16} />,
    "Generative AI": <Bot size={16} />,
    "React Native": <Smartphone size={16} />,
    "Expo": <Smartphone size={16} />,
    "Mobile-first Design": <Smartphone size={16} />,
    "App Performance": <Smartphone size={16} />,
    "Cross-platform": <Smartphone size={16} />,
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-4 text-center text-[#b30d0d]">Skills & Expertise</h2>
      <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
        My technical toolkit and areas of expertise
      </p>

      <div className="relative border-l border-gray-200 ml-3 md:ml-6 pl-8 md:pl-12 space-y-12">
        {skillCategories.map((category) => (
          <div key={category.name} className="relative">
            {/* Timeline dot */}
            <div className="absolute w-4 h-4 border-2 border-gray-300 rounded-full -left-[34px] md:-left-[42px]" />

            {/* Content */}
            <div>
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-2 px-3 py-1 border-2 border-gray-300 rounded-full text-sm text-accent transition hover:scale-105">
                    {skillIcons[skill] ?? <Code size={16} />} {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
