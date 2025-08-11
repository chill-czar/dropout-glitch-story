import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Terminal, Play } from "lucide-react";
import { toast } from "sonner";

interface CodeSnippetProps {
  title: string;
  code: string;
  language?: string;
  description?: string;
  accentColor?: "blue" | "pink" | "green";
}

const colorMap = {
  blue: "border-neon-blue shadow-neon-blue text-neon-blue",
  pink: "border-neon-pink shadow-neon-pink text-neon-pink", 
  green: "border-neon-green shadow-neon-green text-neon-green"
};

export const CodeSnippet = ({ 
  title, 
  code, 
  language = "javascript", 
  description,
  accentColor = "blue" 
}: CodeSnippetProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorMap[accentColor];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!", {
      style: {
        background: 'hsl(var(--background))',
        border: '1px solid hsl(var(--neon-blue))',
        color: 'hsl(var(--foreground))'
      }
    });
  };

  return (
    <motion.div
      className={`neon-box rounded-2xl overflow-hidden backdrop-blur-lg ${isHovered ? colors : 'border-border'} transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center space-x-3">
          <Terminal className={`w-5 h-5 ${isHovered ? colors.split(' ')[2] : 'text-muted-foreground'} transition-colors duration-300`} />
          <div>
            <h4 className="font-cyber font-bold text-sm">{title}</h4>
            <span className="text-xs text-muted-foreground font-code">{language}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.button
            onClick={copyToClipboard}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              isHovered 
                ? `${colors} bg-transparent hover:bg-current hover:bg-opacity-10` 
                : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Copy className="w-4 h-4" />
          </motion.button>
          
          <motion.button
            className={`p-2 rounded-lg border transition-all duration-300 ${
              isHovered 
                ? `${colors} bg-transparent hover:bg-current hover:bg-opacity-10` 
                : 'border-border text-muted-foreground hover:text-foreground hover:border-foreground'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Code content */}
      <div className="p-4">
        <pre className="font-code text-sm overflow-x-auto">
          <motion.code
            className="text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {code.split('\n').map((line, index) => (
              <motion.div
                key={index}
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <span className="text-muted-foreground mr-4 select-none">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                {line}
              </motion.div>
            ))}
          </motion.code>
        </pre>
      </div>

      {description && (
        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground italic border-l-2 border-muted pl-3">
            {description}
          </p>
        </div>
      )}
    </motion.div>
  );
};