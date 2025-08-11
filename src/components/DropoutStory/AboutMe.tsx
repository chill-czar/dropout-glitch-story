import { motion } from "framer-motion";
import { Calendar, MapPin, Heart, Code, GraduationCap, Lightbulb } from "lucide-react";

const timelineEvents = [
  {
    year: "2018",
    title: "The Realization",
    description: "Sat in a computer science lecture about algorithms from 1970s textbooks while building React apps in my dorm room. The disconnect was jarring.",
    icon: GraduationCap,
    color: "neon-pink"
  },
  {
    year: "2019", 
    title: "The Exit",
    description: "Walked out of college mid-semester. My parents were devastated. I was terrified but determined to bet on myself.",
    icon: Heart,
    color: "neon-blue"
  },
  {
    year: "2020",
    title: "The Grind",
    description: "14-hour coding days. Living on instant noodles. Tutorial hell was real, but so was the progress. Every bug fixed felt like a victory.",
    icon: Code,
    color: "neon-green"
  },
  {
    year: "2021",
    title: "First Client",
    description: "Built my first real project for a local business. $500 that felt like a million. Proof that this crazy path could work.",
    icon: Lightbulb,
    color: "neon-purple"
  },
  {
    year: "2022",
    title: "Agency Launch",
    description: "Formed a team of fellow rebels. We weren't just building websites; we were crafting digital experiences that broke the mold.",
    icon: MapPin,
    color: "neon-pink"
  },
  {
    year: "2023",
    title: "Today",
    description: "Leading a team, serving amazing clients, and proving that sometimes the unconventional path leads to extraordinary destinations.",
    icon: Calendar,
    color: "neon-blue"
  }
];

export const AboutMe = () => {
  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-5xl md:text-6xl font-cyber font-black text-gradient-neon leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                ABOUT ME
              </motion.h2>
              
              <motion.h3
                className="text-xl md:text-2xl font-cyber font-semibold text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                The Dropout Who Chose a Different Path
              </motion.h3>
            </div>

            <motion.div
              className="space-y-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-foreground border-l-4 border-neon-blue pl-6 bg-neon-blue/5 py-4">
                They say college is the key to success. I say <span className="text-neon-blue font-bold">curiosity</span> and 
                <span className="text-neon-pink font-bold"> relentless execution</span> are the real keys. When lecture halls 
                felt like prisons and textbooks seemed ancient, I chose to build my education in the real world.
              </p>

              <p className="text-foreground">
                The dropout label was supposed to be a scarlet letter. Instead, it became my badge of honor. While others 
                followed predetermined paths, I carved my own through late-night coding sessions, failed projects that taught 
                valuable lessons, and the unwavering belief that <span className="text-neon-green font-bold">mastery comes from doing, not just learning</span>.
              </p>

              <p className="text-foreground border-l-4 border-neon-pink pl-6 bg-neon-pink/5 py-4">
                Today, I lead a team of brilliant developers who share the same rebellious spirit. We don't just write code; 
                we craft digital experiences that push boundaries and challenge conventions. Because sometimes the best path 
                is the one <span className="text-neon-purple font-bold">you create yourself</span>.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { number: "5+", label: "Years Coding", color: "text-neon-blue" },
                { number: "50+", label: "Projects Built", color: "text-neon-pink" },
                { number: "∞", label: "Learning Mode", color: "text-neon-green" }
              ].map((stat, index) => (
                <div key={index} className="neon-box p-4 rounded-lg text-center">
                  <div className={`text-2xl font-cyber font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Interactive Timeline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-cyber font-bold text-center mb-8 text-gradient-glitch">
              The Journey Timeline
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-pink to-neon-green opacity-60"></div>

              {/* Timeline events */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => {
                  const Icon = event.icon;
                  const colorClass = event.color.replace('neon-', 'text-neon-');
                  
                  return (
                    <motion.div
                      key={event.year}
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Timeline icon */}
                      <div className={`relative z-10 w-16 h-16 neon-box rounded-full flex items-center justify-center bg-background`}>
                        <Icon className={`w-8 h-8 ${colorClass}`} />
                      </div>

                      {/* Event content */}
                      <div className="flex-1 neon-box p-6 rounded-lg backdrop-blur-sm">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`text-lg font-cyber font-bold ${colorClass}`}>
                            {event.year}
                          </span>
                          <h4 className="text-lg font-cyber font-bold text-foreground">
                            {event.title}
                          </h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};