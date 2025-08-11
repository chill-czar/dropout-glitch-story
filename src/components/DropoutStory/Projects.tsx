import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Play, Code2, Smartphone, Globe, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NeuroCommerce",
    category: "E-commerce Platform",
    description: "AI-powered e-commerce platform with predictive analytics, real-time inventory management, and personalized shopping experiences. Built with micro-frontend architecture.",
    tech: ["React", "Node.js", "TensorFlow.js", "PostgreSQL", "Docker"],
    features: ["AI Recommendations", "Real-time Analytics", "Micro-frontends", "Payment Gateway"],
    image: "/placeholder-project-1.jpg",
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "neon-blue",
    stats: { users: "10K+", performance: "98%", uptime: "99.9%" }
  },
  {
    id: 2,
    title: "CodeMentor AI",
    category: "Developer Tool",
    description: "Real-time code review and mentoring platform using machine learning to provide instant feedback, code suggestions, and learning paths for developers.",
    tech: ["Next.js", "Python", "OpenAI API", "Redis", "WebSockets"],
    features: ["AI Code Review", "Real-time Collaboration", "Learning Paths", "Performance Metrics"],
    image: "/placeholder-project-2.jpg",
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "neon-pink",
    stats: { reviews: "50K+", accuracy: "94%", users: "5K+" }
  },
  {
    id: 3,
    title: "EcoTracker",
    category: "Sustainability App",
    description: "Mobile-first carbon footprint tracking app with gamification, social challenges, and corporate sustainability dashboards. Features AR scanning for products.",
    tech: ["React Native", "AR.js", "Firebase", "Express", "Chart.js"],
    features: ["AR Product Scanning", "Social Challenges", "Corporate Dashboard", "Carbon Analytics"],
    image: "/placeholder-project-3.jpg",
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "neon-green",
    stats: { scans: "100K+", co2Saved: "50T", users: "15K+" }
  },
  {
    id: 4,
    title: "CryptoVault",
    category: "Fintech",
    description: "Secure cryptocurrency portfolio management with DeFi integration, automated trading strategies, and advanced risk assessment algorithms.",
    tech: ["Vue.js", "Solidity", "Web3.js", "MongoDB", "Bull Queue"],
    features: ["DeFi Integration", "Auto Trading", "Risk Assessment", "Multi-wallet Support"],
    image: "/placeholder-project-4.jpg",
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "neon-purple",
    stats: { volume: "$10M+", trades: "25K+", accuracy: "87%" }
  },
  {
    id: 5,
    title: "MindFlow",
    category: "Mental Health",
    description: "AI-driven mental health companion with mood tracking, personalized meditation, crisis intervention, and therapist matching algorithms.",
    tech: ["React", "TensorFlow", "Socket.io", "PostgreSQL", "AWS"],
    features: ["Mood AI Analysis", "Crisis Detection", "Therapist Matching", "Meditation Engine"],
    image: "/placeholder-project-5.jpg",
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "neon-blue",
    stats: { sessions: "100K+", satisfaction: "96%", response: "<30s" }
  },
  {
    id: 6,
    title: "DevOps Suite",
    category: "Infrastructure",
    description: "Complete DevOps automation platform with CI/CD pipelines, infrastructure as code, monitoring dashboards, and security scanning.",
    tech: ["Go", "Kubernetes", "Terraform", "Grafana", "Prometheus"],
    features: ["Auto Deployment", "Infrastructure Code", "Security Scanning", "Performance Monitoring"],
    image: "/placeholder-project-6.jpg",
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "neon-pink",
    stats: { deployments: "10K+", uptime: "99.99%", savings: "40%" }
  }
];

const colorMap = {
  "neon-blue": {
    text: "text-neon-blue",
    bg: "bg-neon-blue",
    border: "border-neon-blue",
    glow: "shadow-neon-blue"
  },
  "neon-pink": {
    text: "text-neon-pink",
    bg: "bg-neon-pink",
    border: "border-neon-pink",
    glow: "shadow-neon-pink"
  },
  "neon-green": {
    text: "text-neon-green",
    bg: "bg-neon-green",
    border: "border-neon-green",
    glow: "shadow-neon-green"
  },
  "neon-purple": {
    text: "text-neon-purple",
    bg: "bg-neon-purple",
    border: "border-neon-purple",
    glow: "shadow-neon-blue"
  }
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-cyber font-black text-gradient-glitch mb-4">
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Innovation • System Design • Real-World Impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Project Navigation */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-cyber font-bold text-foreground mb-6">
              Featured Work
            </h3>
            
            {projects.map((project, index) => {
              const colors = colorMap[project.accentColor as keyof typeof colorMap];
              const isActive = activeProject === index;
              
              return (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    isActive 
                      ? `${colors.border} ${colors.glow} bg-${project.accentColor}/10` 
                      : 'border-border hover:border-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h4 className={`font-cyber font-bold text-sm ${isActive ? colors.text : 'text-foreground'}`}>
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {project.category}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.tech.length - 2}
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Project Details */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeProject}
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const project = projects[activeProject];
                const colors = colorMap[project.accentColor as keyof typeof colorMap];
                
                return (
                  <>
                    {/* Project Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <Code2 className={`w-6 h-6 ${colors.text}`} />
                          <span className={`text-sm font-cyber font-bold ${colors.text}`}>
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-4xl font-cyber font-black text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.button
                          className={`btn-cyber flex items-center space-x-2 ${colors.border} ${colors.text}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.button>
                        <motion.button
                          className="px-6 py-3 border border-muted text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300 font-cyber font-bold uppercase tracking-wider flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.button>
                      </div>
                    </div>

                    {/* Project Image/Demo */}
                    <motion.div
                      className={`neon-box rounded-2xl overflow-hidden h-64 lg:h-80 bg-gradient-to-br from-background to-muted flex items-center justify-center ${colors.glow}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center space-y-4">
                        <div className={`w-24 h-24 ${colors.bg}/20 rounded-full flex items-center justify-center mx-auto`}>
                          <Code2 className={`w-12 h-12 ${colors.text}`} />
                        </div>
                        <div>
                          <h4 className="font-cyber font-bold text-lg text-foreground">
                            Interactive Demo
                          </h4>
                          <p className="text-muted-foreground">
                            Click to explore the live application
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Features & Tech Stack */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-cyber font-bold text-foreground mb-4 flex items-center space-x-2">
                          <Zap className={`w-5 h-5 ${colors.text}`} />
                          <span>Key Features</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="neon-box p-3 rounded-lg text-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-sm font-cyber font-semibold text-foreground">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-xl font-cyber font-bold text-foreground mb-4 flex items-center space-x-2">
                          <Globe className={`w-5 h-5 ${colors.text}`} />
                          <span>Tech Stack</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <motion.span
                              key={index}
                              className={`px-3 py-2 ${colors.border} border rounded-lg ${colors.bg}/10 ${colors.text} text-sm font-cyber font-semibold`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className={`neon-box p-6 rounded-xl ${colors.glow}`}>
                      <h4 className="text-lg font-cyber font-bold text-foreground mb-4">
                        Project Impact
                      </h4>
                      <div className="grid grid-cols-3 gap-6 text-center">
                        {Object.entries(project.stats).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                          >
                            <div className={`text-2xl font-cyber font-bold ${colors.text}`}>
                              {value}
                            </div>
                            <div className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>

        {/* Floating code snippets */}
        <div className="absolute top-20 left-10 opacity-20 animate-float font-code text-sm text-neon-green hidden xl:block">
          {'// Building the future'}
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-float font-code text-sm text-neon-purple hidden xl:block" style={{ animationDelay: '1s' }}>
          {'const impact = await deploy();'}
        </div>
      </div>
    </section>
  );
};