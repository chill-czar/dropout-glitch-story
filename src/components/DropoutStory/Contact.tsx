import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Github, Linkedin, Twitter, MessageCircle, Zap, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! I'll get back to you soon.", {
      style: {
        background: 'hsl(var(--background))',
        border: '1px solid hsl(var(--neon-green))',
        color: 'hsl(var(--foreground))'
      }
    });
    
    setFormData({ name: "", email: "", project: "", message: "", budget: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "neon-blue" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "neon-pink" },
    { icon: Twitter, label: "Twitter", href: "#", color: "neon-green" },
    { icon: MessageCircle, label: "Discord", href: "#", color: "neon-purple" }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
            CONTACT
          </h2>
          <p className="text-xl text-muted-foreground font-cyber">
            Ready to Disrupt • Let's Build Something Amazing • Start Your Project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & CTA */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-cyber font-black text-foreground">
                Let's Create Something Revolutionary
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-foreground border-l-4 border-neon-blue pl-6 bg-neon-blue/5 py-4">
                  Got a project that needs the <span className="text-neon-blue font-bold">dropout advantage</span>? 
                  Whether it's a startup MVP, enterprise application, or revolutionary idea that others said 
                  couldn't be done – I'm your developer.
                </p>

                <p className="text-foreground">
                  I don't just build websites; I craft digital experiences that break conventions and 
                  deliver results. Every project gets the same rebellious attention to detail that 
                  transformed a college dropout into a <span className="text-neon-pink font-bold">full-stack master</span>.
                </p>
              </div>
            </div>

            {/* Quick contact options */}
            <div className="space-y-4">
              <h4 className="text-xl font-cyber font-bold text-foreground flex items-center space-x-2">
                <Zap className="w-5 h-5 text-neon-green" />
                <span>Quick Connect</span>
              </h4>
              
              <div className="space-y-3">
                <motion.a
                  href="mailto:hello@dropoutdev.com"
                  className="flex items-center space-x-3 p-4 neon-box rounded-lg hover:shadow-neon-blue transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Mail className="w-5 h-5 text-neon-blue" />
                  <div>
                    <span className="font-cyber font-bold text-foreground">Email Me Directly</span>
                    <p className="text-sm text-muted-foreground">hello@dropoutdev.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 p-4 neon-box rounded-lg hover:shadow-neon-pink transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <MessageCircle className="w-5 h-5 text-neon-pink" />
                  <div>
                    <span className="font-cyber font-bold text-foreground">Schedule a Call</span>
                    <p className="text-sm text-muted-foreground">Let's discuss your project</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-cyber font-bold text-foreground">
                Find Me Online
              </h4>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const colorClass = `text-${social.color}`;
                  const glowClass = `shadow-${social.color}`;
                  
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 neon-box rounded-lg flex items-center justify-center hover:${glowClass} transition-all duration-300`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`w-5 h-5 ${colorClass}`} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              className="neon-box-green p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-neon-green rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <span className="font-cyber font-bold text-neon-green">Available for New Projects</span>
                  <p className="text-sm text-muted-foreground">Currently accepting 2-3 new clients for Q1 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="neon-box p-8 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-cyber font-bold text-foreground mb-6">
                  Start Your Project
                </h3>
              </div>

              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-cyber font-semibold text-foreground">
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg font-cyber transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-neon-blue shadow-neon-blue text-foreground' 
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                    placeholder="Your name"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-cyber font-semibold text-foreground">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg font-cyber transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-neon-blue shadow-neon-blue text-foreground' 
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                    placeholder="your@email.com"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-cyber font-semibold text-foreground">
                    Project Type
                  </label>
                  <motion.select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('project')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg font-cyber transition-all duration-300 ${
                      focusedField === 'project' 
                        ? 'border-neon-blue shadow-neon-blue text-foreground' 
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="api">API Development</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-cyber font-semibold text-foreground">
                    Budget Range
                  </label>
                  <motion.select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-background border rounded-lg font-cyber transition-all duration-300 ${
                      focusedField === 'budget' 
                        ? 'border-neon-blue shadow-neon-blue text-foreground' 
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                    <option value="discuss">Let's discuss</option>
                  </motion.select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-cyber font-semibold text-foreground">
                  Project Details *
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border rounded-lg font-cyber transition-all duration-300 resize-none ${
                    focusedField === 'message' 
                      ? 'border-neon-blue shadow-neon-blue text-foreground' 
                      : 'border-border text-foreground hover:border-foreground'
                  }`}
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-cyber flex items-center justify-center space-x-3 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Form note */}
              <p className="text-sm text-muted-foreground text-center">
                I typically respond within 24 hours. Serious inquiries only.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float font-code text-sm text-neon-green hidden xl:block">
          {'// Let\'s build together'}
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-float font-code text-sm text-neon-purple hidden xl:block" style={{ animationDelay: '1s' }}>
          {'await sendMessage();'}
        </div>
      </div>
    </section>
  );
};