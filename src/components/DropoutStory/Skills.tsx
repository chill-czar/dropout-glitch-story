import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Palette, Globe, Smartphone, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    color: "neon-blue",
    skills: [
      { name: "React/Next.js", level: 95, experience: "4 years" },
      { name: "TypeScript", level: 90, experience: "3 years" },
      { name: "Tailwind CSS", level: 92, experience: "3 years" },
      { name: "Framer Motion", level: 88, experience: "2 years" },
      { name: "Three.js", level: 75, experience: "1 year" }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "neon-pink",
    skills: [
      { name: "Node.js", level: 87, experience: "3 years" },
      { name: "Python/Django", level: 80, experience: "2 years" },
      { name: "GraphQL", level: 85, experience: "2 years" },
      { name: "REST APIs", level: 92, experience: "4 years" },
      { name: "Microservices", level: 78, experience: "2 years" }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "neon-green",
    skills: [
      { name: "PostgreSQL", level: 88, experience: "3 years" },
      { name: "MongoDB", level: 82, experience: "2 years" },
      { name: "Redis", level: 75, experience: "1 year" },
      { name: "Supabase", level: 90, experience: "2 years" },
      { name: "Prisma", level: 85, experience: "2 years" }
    ]
  },
  {
    title: "DevOps",
    icon: Globe,
    color: "neon-purple",
    skills: [
      { name: "Docker", level: 80, experience: "2 years" },
      { name: "AWS/Vercel", level: 85, experience: "3 years" },
      { name: "CI/CD", level: 82, experience: "2 years" },
      { name: "Nginx", level: 75, experience: "1 year" },
      { name: "Monitoring", level: 70, experience: "1 year" }
    ]
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

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
          <h2 className="text-5xl md:text-6xl font-cyber font-black text-gradient-neon mb-4">
            SKILLS
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Full-Stack Mastery • Self-Taught Excellence • Always Learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Category Navigation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-cyber font-bold text-foreground mb-6">
              Skill Categories
            </h3>
            
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = colorMap[category.color as keyof typeof colorMap];
              const isActive = activeCategory === index;
              
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-lg border transition-all duration-300 ${
                    isActive 
                      ? `${colors.border} ${colors.glow} bg-${category.color}/10` 
                      : 'border-border hover:border-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive ? `${colors.bg}/20 ${colors.border} border` : 'bg-muted'
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? colors.text : 'text-muted-foreground'}`} />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-cyber font-bold ${isActive ? colors.text : 'text-foreground'}`}>
                      {category.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeCategory}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                {(() => {
                  const Icon = skillCategories[activeCategory].icon;
                  const colors = colorMap[skillCategories[activeCategory].color as keyof typeof colorMap];
                  return (
                    <>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                      <h3 className="text-3xl font-cyber font-bold text-foreground">
                        {skillCategories[activeCategory].title} Skills
                      </h3>
                    </>
                  );
                })()}
              </div>

              <div className="grid gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => {
                  const colors = colorMap[skillCategories[activeCategory].color as keyof typeof colorMap];
                  const isHovered = hoveredSkill === skill.name;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      className={`neon-box p-6 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                        isHovered ? colors.glow : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h4 className="font-cyber font-bold text-lg text-foreground">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {skill.experience} experience
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xl font-cyber font-bold ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${colors.bg} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        />
                        {isHovered && (
                          <div className={`absolute inset-0 ${colors.bg} opacity-30 animate-pulse rounded-full`} />
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating skill indicators */}
        <div className="absolute top-20 left-10 opacity-20 animate-float font-code text-sm text-neon-blue hidden xl:block">
          {'// Self-taught mastery'}
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-float font-code text-sm text-neon-pink hidden xl:block" style={{ animationDelay: '1s' }}>
          {'const skills = await learn();'}
        </div>
        <div className="absolute top-1/2 right-20 opacity-20 animate-float font-code text-sm text-neon-green hidden xl:block" style={{ animationDelay: '2s' }}>
          {'// Always evolving'}
        </div>
      </div>
    </section>
  );
};