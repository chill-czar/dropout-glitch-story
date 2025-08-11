import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, User, Code2, FolderOpen, Briefcase, BookOpen, Mail, Eye } from "lucide-react";

const chapters = [
  { id: "hero", label: "Start", icon: Code2 },
  { id: "about", label: "About Me", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Mail }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveChapter(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/50 z-50">
        <motion.div 
          className="h-full bg-gradient-neon"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Floating navigation */}
      <motion.nav 
        className="fixed top-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden neon-box p-3 rounded-full backdrop-blur-lg"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-neon-pink" />
          ) : (
            <Menu className="w-6 h-6 text-neon-blue" />
          )}
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex flex-col space-y-2">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            const isActive = activeChapter === chapter.id;
            
            return (
              <motion.button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-lg backdrop-blur-lg transition-all duration-300 ${
                  isActive 
                    ? 'neon-box-pink text-neon-pink' 
                    : 'neon-box hover:shadow-neon-blue text-muted-foreground hover:text-neon-blue'
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.7 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-cyber font-semibold text-sm whitespace-nowrap">
                  {chapter.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile navigation menu */}
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-16 right-0 neon-box rounded-2xl p-4 backdrop-blur-lg min-w-[200px]"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {chapters.map((chapter) => {
              const Icon = chapter.icon;
              const isActive = activeChapter === chapter.id;
              
              return (
                <button
                  key={chapter.id}
                  onClick={() => scrollToSection(chapter.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'text-neon-pink bg-neon-pink/10' 
                      : 'text-muted-foreground hover:text-neon-blue hover:bg-neon-blue/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-cyber font-semibold text-sm">
                    {chapter.label}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </motion.nav>

      {/* Chapter indicator */}
      <motion.div
        className="fixed bottom-6 left-6 neon-box p-4 rounded-lg backdrop-blur-lg z-40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <Eye className="w-5 h-5 text-neon-green animate-pulse" />
          <div>
            <div className="text-xs text-muted-foreground font-cyber">Current Chapter</div>
            <div className="text-sm font-cyber font-bold text-neon-green">
              {chapters.find(ch => ch.id === activeChapter)?.label || "Loading..."}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};