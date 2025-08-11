import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChapterProps {
  title: string;
  subtitle: string;
  content: string;
  accentColor: "blue" | "pink" | "green" | "purple";
  children?: ReactNode;
  reverse?: boolean;
}

const colorMap = {
  blue: {
    title: "text-neon-blue",
    border: "border-neon-blue",
    glow: "shadow-neon-blue",
    bg: "bg-neon-blue/5"
  },
  pink: {
    title: "text-neon-pink",
    border: "border-neon-pink", 
    glow: "shadow-neon-pink",
    bg: "bg-neon-pink/5"
  },
  green: {
    title: "text-neon-green",
    border: "border-neon-green",
    glow: "shadow-neon-green", 
    bg: "bg-neon-green/5"
  },
  purple: {
    title: "text-neon-purple",
    border: "border-neon-purple",
    glow: "shadow-neon-blue",
    bg: "bg-neon-purple/5"
  }
};

export const Chapter = ({ title, subtitle, content, accentColor, children, reverse = false }: ChapterProps) => {
  const colors = colorMap[accentColor];

  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-10 ${reverse ? 'right-10' : 'left-10'} w-32 h-32 ${colors.bg} rounded-full blur-2xl animate-float`}></div>
        <div className={`absolute bottom-20 ${reverse ? 'left-20' : 'right-20'} w-24 h-24 ${colors.bg} rounded-full blur-xl animate-float`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content side */}
          <motion.div
            className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h2
                className={`text-5xl md:text-6xl font-cyber font-black ${colors.title} leading-tight`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {title}
              </motion.h2>
              
              <motion.h3
                className="text-xl md:text-2xl font-cyber font-semibold text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {subtitle}
              </motion.h3>
            </div>

            <motion.div
              className={`${colors.border} border-l-4 pl-6 ${colors.bg} py-6`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed text-foreground">
                {content}
              </p>
            </motion.div>

            {/* Interactive elements */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className={`px-4 py-2 ${colors.border} border rounded-lg ${colors.bg} backdrop-blur-sm`}>
                <span className="text-sm font-code text-muted-foreground"># Chapter Progress</span>
              </div>
              <div className={`px-4 py-2 ${colors.border} border rounded-lg ${colors.bg} backdrop-blur-sm hover:${colors.glow} transition-all duration-300 cursor-pointer`}>
                <span className="text-sm font-code ${colors.title}">→ Deep Dive</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Interactive side */}
          <motion.div
            className={`${reverse ? 'lg:col-start-1' : ''} flex justify-center`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            {children || (
              <div className={`neon-box ${colors.glow} p-8 rounded-2xl max-w-md w-full`}>
                <div className="space-y-4">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center ${colors.glow}`}>
                    <div className={`w-8 h-8 ${colors.title.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className={`h-2 ${colors.title.replace('text-', 'bg-')} rounded opacity-60`}></div>
                    <div className={`h-2 ${colors.title.replace('text-', 'bg-')} rounded opacity-40 w-3/4`}></div>
                    <div className={`h-2 ${colors.title.replace('text-', 'bg-')} rounded opacity-20 w-1/2`}></div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};