"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Badge, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
//import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
//import AnimatedSection from "@/components/animated-section"
//import ProjectPreviewModal from "@/components/project-preview-modal"

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management, secure payment processing, and comprehensive analytics dashboard.",
    longDescription:
      "This e-commerce platform was built to handle high traffic and large product catalogs while providing a seamless shopping experience. It features real-time inventory tracking, secure payment processing with multiple gateways, a comprehensive admin dashboard, and detailed analytics to help businesses make data-driven decisions.",
    tags: ["Next.js", "TypeScript", "Stripe", "+1"],
    imageUrl: "/placeholder.svg?height=600&width=1200",
    projectUrl: "#",
    githubUrl: "https://github.com",
    featured: true,
    category: "Web App",
    status: "NEW",
    date: "Oct 2023",
    features: [
      "Real-time inventory management",
      "Multi-payment gateway integration",
      "Advanced search and filtering",
      "Customer account management",
      "Order tracking and history",
      "Admin dashboard with analytics",
    ],
    icon: "download",
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description:
      "Mobile-first application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    tags: ["React Native", "Firebase", "+1"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
    githubUrl: "https://github.com",
    category: "Mobile App",
    status: "FEATURED",
    date: "Aug 2023",
    features: [
      "Personalized workout plans",
      "Nutrition tracking and meal suggestions",
      "Health metrics visualization",
      "Progress tracking with charts",
      "Social sharing capabilities",
    ],
    icon: "download",
  },
  {
    id: 3,
    title: "AI Content Platform",
    description: "Content generation platform leveraging AI to create personalized marketing materials at scale.",
    tags: ["Python", "React", "+1"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
    githubUrl: "https://github.com",
    category: "AI/ML",
    status: "REVIEWED",
    date: "Jul 2023",
    features: [
      "AI-powered content generation",
      "Template customization",
      "Brand voice adaptation",
      "Multi-format output (social, email, blog)",
      "Performance analytics",
    ],
    icon: "download",
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    description: "Property listing platform with virtual tours, neighborhood analytics, and agent matching.",
    tags: ["Next.js", "Three.js", "PostgreSQL"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
    category: "Web App",
    status: "COMPLETED",
    date: "May 2023",
    features: [
      "Virtual 3D property tours",
      "Neighborhood data visualization",
      "Agent-client matching algorithm",
      "Appointment scheduling",
      "Property comparison tools",
    ],
    icon: "download",
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Comprehensive LMS with course creation tools, student progress tracking, and interactive assessments.",
    tags: ["React", "Express", "MongoDB"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    projectUrl: "#",
    githubUrl: "https://github.com",
    category: "Web App",
    status: "UPDATED",
    date: "Apr 2023",
    features: [
      "Course creation and management",
      "Interactive lesson builder",
      "Student progress tracking",
      "Assessment and quiz tools",
      "Certificate generation",
    ],
    icon: "download",
  },
]

// Get unique categories
const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

// Status badge colors
const getStatusColor = (status: string) => {
  switch (status) {
    case "NEW":
      return "bg-green-500 text-white"
    case "FEATURED":
      return "bg-purple-500 text-white"
    case "REVIEWED":
      return "bg-blue-500 text-white"
    case "UPDATED":
      return "bg-amber-500 text-white"
    case "COMPLETED":
      return "bg-gray-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  // Handle project preview
  const handlePreview = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-gray-900">
      <div className="container">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={cn(
                  "px-4 py-2 text-sm cursor-pointer transition-all",
                  selectedCategory === category ? "bg-primary" : "hover:bg-primary/10",
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Featured Project - Large */}
            <div className="col-span-12 md:col-span-7 bg-gray-900 dark:bg-gray-800 rounded-3xl overflow-hidden">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Badge className={getStatusColor("NEW")}>NEW</Badge>
                  <span className="text-gray-400">Oct 2023</span>
                </div>

                <div className="mb-6">
                  <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-300 text-xl mb-4">
                    A full-featured e-commerce solution with real-time inventory management, secure payment processing,
                    and comprehensive analytics dashboard.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      Stripe
                    </Badge>
                    <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                      +1
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800"
                    onClick={() => handlePreview(projects[0])}
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Two Cards */}
            <div className="col-span-12 md:col-span-5 space-y-6">
              {/* Health & Fitness App */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getStatusColor("FEATURED")}>FEATURED</Badge>
                    <span className="text-gray-500 dark:text-gray-400">Aug 2023</span>
                  </div>

                  <div className="mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">Health & Fitness App</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      React Native
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      Firebase
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      +1
                    </Badge>
                  </div>

                  <Button variant="default" className="w-full" onClick={() => handlePreview(projects[1])}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* AI Content Platform */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getStatusColor("REVIEWED")}>REVIEWED</Badge>
                    <span className="text-gray-500 dark:text-gray-400">Jul 2023</span>
                  </div>

                  <div className="mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">AI Content Platform</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      React
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700">
                      +1
                    </Badge>
                  </div>

                  <Button variant="default" className="w-full" onClick={() => handlePreview(projects[2])}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Cards */}
            <div className="col-span-12 md:col-span-6 bg-gray-900 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getStatusColor("COMPLETED")}>COMPLETED</Badge>
                  <span className="text-gray-400">May 2023</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Real Estate Marketplace</h3>

                <Button
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800"
                  onClick={() => handlePreview(projects[3])}
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 bg-amber-500 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white text-amber-500">UPDATED</Badge>
                  <span className="text-white">Apr 2023</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Learning Management System</h3>

                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-amber-600"
                  onClick={() => handlePreview(projects[4])}
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Preview Modal */}
     {/* <ProjectPreviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />*/}
    </section>
  )
}

