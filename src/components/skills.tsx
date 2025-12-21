import type React from "react";
import {
  Code,
  Globe,
  Layers,
  Database,
  PenTool,
  Smartphone,
} from "lucide-react";

export default function SkillsSection() {
  return (
    <div className="min-h-screen text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#b30d0d] nline-block mb-4">
            Skills & Expertise
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <SkillCard
            icon={<Code className="w-8 h-8" />}
            title="Frontend Development"
            color="bg-white/90 text-black"
            skills={[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
            ]}
          />

          {/* 3D & Interactive */}
          {/*<SkillCard
            icon={<Globe className="w-8 h-8" />}
            title="3D & Interactive"
            color="bg-white/90 text-black"
            skills={[
              "Three.js",
              "WebGL",
              "GLSL",
              "React Three Fiber",
              "3D Modeling",
            ]}
          />*/}

          {/* Design */}
          <SkillCard
            icon={<PenTool className="w-8 h-8" />}
            title="Design"
            color="bg-white/90 text-black"
            skills={[
              "UI/UX Design",
              "Figma",
              "Adobe Creative Suite",
              "Motion Design",
              "Design Systems",
            ]}
          />

          {/* Backend Development */}
          <SkillCard
            icon={<Database className="w-8 h-8" />}
            title="Backend Development"
            color="bg-white/90 text-black"
            skills={[
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "REST APIs",
            ]}
          />

          {/* Mobile Development */}
          <SkillCard
            icon={<Smartphone className="w-8 h-8" />}
            title="Mobile Development"
            color="bg-white/90 text-black"
            skills={[
              "React Native",
              "Flutter",
              "iOS (Swift)",
              "Android (Kotlin)",
              "Expo",
            ]}
          />

          {/* Web Technologies */}
          <SkillCard
            icon={<Globe className="w-8 h-8" />}
            title="Web Technologies"
            color="bg-white/90 text-black"
            skills={[
              "Progressive Web Apps",
              "SEO",
              "Web Performance",
              "Accessibility",
            ]}
          />

          {/* Additional Skills */}
          <SkillCard
            icon={<Layers className="w-8 h-8" />}
            title="Additional Skills"
            color="bg-white/90 text-black"
            skills={[
              "Git & Version Control",
              "CI/CD Pipelines",
              "Testing",
              "Agile Methodologies",
              "Prisma",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
}

function SkillCard({ icon, title, color, skills }: SkillCardProps) {
  return (
    <div className=" backdrop-blur-sm rounded-2xl overflow-hidden border border-black hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10 group">
      <div className={`bg-gradient-to-r ${color} p-6 flex items-center gap-4`}>
        <div className="bg-whit bg-opacity-30 p-3 rounded-lg">{icon}</div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="p-6">
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
