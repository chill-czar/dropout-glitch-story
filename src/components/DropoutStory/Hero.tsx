import { motion } from "framer-motion";
import { ChevronDown, Code, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-green/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main headline with glitch effect */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-cyber font-black leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-gradient-neon glitch" data-text="FROM DROPOUT">
                FROM DROPOUT
              </span>
              <span className="block text-foreground mt-2">TO</span>
              <span className="block text-gradient-glitch glitch" data-text="CODE MASTER">
                CODE MASTER
              </span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-muted-foreground font-cyber font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Breaking Rules • Building Dreams • Mastering Code
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            A rebellious journey into frontend mastery and beyond. 
            From classroom failure to full-stack dominance and agency success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <button className="btn-cyber group flex items-center gap-3">
              <Code className="w-5 h-5 group-hover:animate-pulse" />
              Start the Story
            </button>
            <button className="px-8 py-3 border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-background transition-all duration-300 font-cyber font-bold uppercase tracking-wider flex items-center gap-3">
              <Zap className="w-5 h-5" />
              Skip to Agency
            </button>
          </motion.div>

          {/* Floating code snippets */}
          <div className="absolute top-20 left-10 opacity-20 animate-float font-code text-sm text-neon-green hidden lg:block">
            {'// The dropout decision'}
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 animate-float font-code text-sm text-neon-pink hidden lg:block" style={{ animationDelay: '1.5s' }}>
            {'console.log("Hello, World!");'}
          </div>
          <div className="absolute top-1/2 right-20 opacity-20 animate-float font-code text-sm text-neon-blue hidden lg:block" style={{ animationDelay: '0.8s' }}>
            {'const success = hustle + code;'}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center space-y-2 text-neon-blue">
            <span className="text-sm font-cyber uppercase tracking-wider">Scroll to Continue</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};