import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, Calendar, MapPin, Star, ExternalLink, Award, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "agency",
    title: "Founder & Lead Developer",
    company: "Rebel Code Studio",
    location: "Remote",
    period: "2022 - Present",
    description: "Founded and lead a team of 5 developers creating cutting-edge web applications for startups and enterprises. Focus on modern tech stack and innovative solutions.",
    achievements: [
      "Built 50+ successful projects across various industries",
      "Achieved 98% client satisfaction rate",
      "Grew team from 1 to 5 developers in 18 months",
      "Generated $500K+ in revenue"
    ],
    tech: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL"],
    color: "neon-blue",
    icon: Award
  },
  {
    id: 2,
    type: "freelance",
    title: "Senior Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2020 - 2022",
    description: "Specialized in rapid prototyping and MVP development for early-stage startups. Delivered high-quality solutions under tight deadlines.",
    achievements: [
      "Completed 25+ freelance projects successfully",
      "Maintained 5-star rating across all platforms",
      "Reduced client development costs by 40%",
      "Built 3 products that secured Series A funding"
    ],
    tech: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
    color: "neon-pink",
    icon: Star
  },
  {
    id: 3,
    type: "internship",
    title: "Frontend Developer Intern",
    company: "TechStart Inc.",
    location: "San Francisco, CA",
    period: "2019 - 2020",
    description: "First real-world experience working on a large-scale SaaS platform. Learned modern development practices and agile methodologies.",
    achievements: [
      "Improved app performance by 35%",
      "Implemented responsive design for 10+ components",
      "Reduced bug reports by 50% through testing",
      "Received full-time offer (declined to pursue freelancing)"
    ],
    tech: ["React", "TypeScript", "Jest", "Sass", "Redux"],
    color: "neon-green", 
    icon: TrendingUp
  },
  {
    id: 4,
    type: "side-project",
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "Global",
    period: "2019 - Present",
    description: "Active contributor to open source projects, maintaining libraries and creating developer tools. Passionate about giving back to the community.",
    achievements: [
      "500+ GitHub contributions in the last year",
      "Maintained 3 popular npm packages",
      "Helped 100+ developers through Stack Overflow",
      "Spoke at 2 local tech meetups"
    ],
    tech: ["JavaScript", "TypeScript", "Node.js", "Open Source"],
    color: "neon-purple",
    icon: Briefcase
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

export const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
            EXPERIENCE
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            From Intern to Founder • Building Experience • Leading Teams
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline Navigation */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-cyber font-bold text-foreground mb-8">
              Career Timeline
            </h3>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-blue to-neon-pink opacity-60"></div>

              {experiences.map((exp, index) => {
                const colors = colorMap[exp.color as keyof typeof colorMap];
                const Icon = exp.icon;
                const isActive = activeExperience === index;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.button
                    key={exp.id}
                    onClick={() => setActiveExperience(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 w-full text-left mb-6 ${
                      isActive || isHovered 
                        ? `${colors.glow} bg-${exp.color}/10` 
                        : 'hover:bg-muted/20'
                    }`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Timeline icon */}
                    <div className={`relative z-10 w-16 h-16 neon-box rounded-full flex items-center justify-center bg-background ${
                      isActive ? colors.glow : ''
                    }`}>
                      <Icon className={`w-8 h-8 ${isActive ? colors.text : 'text-muted-foreground'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className={`font-cyber font-bold text-sm ${isActive ? colors.text : 'text-foreground'}`}>
                          {exp.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground font-semibold">
                        {exp.company}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeExperience}
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {(() => {
                const exp = experiences[activeExperience];
                const colors = colorMap[exp.color as keyof typeof colorMap];
                const Icon = exp.icon;

                return (
                  <>
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${colors.bg}/20 rounded-lg flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-cyber font-black text-foreground">
                            {exp.title}
                          </h3>
                          <p className={`text-lg font-cyber font-semibold ${colors.text}`}>
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6 text-muted-foreground">
                        <span className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-cyber">{exp.period}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-cyber">{exp.location}</span>
                        </span>
                      </div>

                      <p className="text-lg text-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className={`neon-box p-6 rounded-xl ${colors.glow}`}>
                      <h4 className="text-xl font-cyber font-bold text-foreground mb-6 flex items-center space-x-2">
                        <Award className={`w-5 h-5 ${colors.text}`} />
                        <span>Key Achievements</span>
                      </h4>
                      
                      <div className="grid gap-4">
                        {exp.achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-foreground leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-lg font-cyber font-bold text-foreground mb-4 flex items-center space-x-2">
                        <ExternalLink className={`w-5 h-5 ${colors.text}`} />
                        <span>Technologies & Tools</span>
                      </h4>
                      
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((tech, index) => (
                          <motion.span
                            key={index}
                            className={`px-4 py-2 ${colors.border} border rounded-lg ${colors.bg}/10 ${colors.text} font-cyber font-semibold text-sm`}
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

                    {/* Experience Type Badge */}
                    <div className="flex justify-end">
                      <span className={`px-4 py-2 ${colors.bg}/20 ${colors.border} border rounded-full ${colors.text} font-cyber font-bold text-sm uppercase tracking-wider`}>
                        {exp.type.replace('-', ' ')}
                      </span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 opacity-20 animate-float font-code text-sm text-neon-blue hidden xl:block">
          {'// Building experience'}
        </div>
        <div className="absolute bottom-20 left-10 opacity-20 animate-float font-code text-sm text-neon-green hidden xl:block" style={{ animationDelay: '1s' }}>
          {'const growth = experience++;'}
        </div>
      </div>
    </section>
  );
};