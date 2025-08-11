import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Clock, ArrowRight, Tag, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Dropout Advantage: Why I Left College to Code",
    excerpt: "Why traditional education failed me and how self-directed learning accelerated my growth as a developer. A raw, honest take on the dropout journey.",
    category: "Career",
    readTime: "8 min read",
    date: "2023-12-15",
    featured: true,
    tags: ["career", "education", "self-learning"],
    color: "neon-blue"
  },
  {
    id: 2,
    title: "Building Scalable React Apps: Architecture Lessons",
    excerpt: "Hard-learned lessons from building 50+ React applications. Component patterns, state management, and performance optimization strategies that actually work.",
    category: "Technical",
    readTime: "12 min read", 
    date: "2023-11-28",
    featured: true,
    tags: ["react", "architecture", "performance"],
    color: "neon-pink"
  },
  {
    id: 3,
    title: "From Freelancer to Agency Owner: The Transition",
    excerpt: "The challenges, mistakes, and victories of scaling from solo freelancer to leading a team. What I wish I knew before making the leap.",
    category: "Business",
    readTime: "10 min read",
    date: "2023-11-10",
    featured: false,
    tags: ["business", "agency", "leadership"],
    color: "neon-green"
  },
  {
    id: 4,
    title: "Mastering CSS Grid: A Visual Guide",
    excerpt: "Complete visual guide to CSS Grid with real-world examples. Stop fighting with flexbox for layouts that Grid handles perfectly.",
    category: "Tutorial",
    readTime: "15 min read",
    date: "2023-10-22",
    featured: false,
    tags: ["css", "grid", "layout"],
    color: "neon-purple"
  },
  {
    id: 5,
    title: "The Art of Code Reviews: Beyond Finding Bugs",
    excerpt: "How to conduct code reviews that build team culture, share knowledge, and improve code quality. Templates and examples included.",
    category: "Team",
    readTime: "7 min read",
    date: "2023-10-05",
    featured: false,
    tags: ["code-review", "team", "culture"],
    color: "neon-blue"
  },
  {
    id: 6,
    title: "TypeScript Patterns for React Developers",
    excerpt: "Advanced TypeScript patterns that make React development safer and more productive. Generic components, utility types, and more.",
    category: "Technical",
    readTime: "18 min read",
    date: "2023-09-18",
    featured: false,
    tags: ["typescript", "react", "patterns"],
    color: "neon-pink"
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

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categories = ["All", "Career", "Technical", "Business", "Tutorial", "Team"];
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            BLOG & INSIGHTS
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Thoughts • Tutorials • Lessons Learned • Knowledge Sharing
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-cyber font-bold text-foreground mb-8 flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-neon-blue" />
            <span>Featured Articles</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => {
              const colors = colorMap[post.color as keyof typeof colorMap];
              const isHovered = hoveredPost === post.id;

              return (
                <motion.article
                  key={post.id}
                  className={`neon-box p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                    isHovered ? colors.glow : ''
                  }`}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-4">
                    {/* Meta info */}
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 ${colors.bg}/20 ${colors.border} border rounded-full ${colors.text} text-xs font-cyber font-bold uppercase tracking-wider`}>
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>
                    </div>

                    {/* Title and excerpt */}
                    <div className="space-y-3">
                      <h4 className="text-xl font-cyber font-bold text-foreground leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground font-cyber"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more */}
                    <div className="flex items-center justify-between pt-4">
                      <motion.button 
                        className={`flex items-center space-x-2 ${colors.text} font-cyber font-semibold text-sm hover:underline`}
                        whileHover={{ x: 5 }}
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg border font-cyber font-semibold transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'border-neon-blue text-neon-blue shadow-neon-blue bg-neon-blue/10' 
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Posts Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredPosts.map((post, index) => {
            const colors = colorMap[post.color as keyof typeof colorMap];
            const isHovered = hoveredPost === post.id;

            return (
              <motion.article
                key={post.id}
                className={`neon-box p-6 rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  isHovered ? colors.glow : ''
                }`}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-4">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 ${colors.bg}/20 rounded ${colors.text} text-xs font-cyber font-bold`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-cyber">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-cyber font-bold text-foreground leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-border/30">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${colors.text} transition-transform duration-300 ${
                      isHovered ? 'transform translate-x-1' : ''
                    }`} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Coming Soon Note */}
        <motion.div
          className="text-center mt-16 neon-box p-8 rounded-2xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <BookOpen className="w-12 h-12 text-neon-green mx-auto mb-4 animate-float" />
          <h3 className="text-2xl font-cyber font-bold text-foreground mb-2">
            More Content Coming Soon
          </h3>
          <p className="text-muted-foreground">
            This blog section is in development. Follow me for updates on new tutorials, insights, and lessons learned.
          </p>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 opacity-20 animate-float font-code text-sm text-neon-pink hidden xl:block">
          {'// Sharing knowledge'}
        </div>
        <div className="absolute bottom-20 left-10 opacity-20 animate-float font-code text-sm text-neon-blue hidden xl:block" style={{ animationDelay: '1s' }}>
          {'const wisdom = experience.share();'}
        </div>
      </div>
    </section>
  );
};