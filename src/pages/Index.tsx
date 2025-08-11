import { Hero } from "@/components/DropoutStory/Hero";
import { Chapter } from "@/components/DropoutStory/Chapter";
import { Navigation } from "@/components/DropoutStory/Navigation";
import { CodeSnippet } from "@/components/DropoutStory/CodeSnippet";
import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Building2, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Chapter 1: The Exit */}
      <section id="exit">
        <Chapter
          title="THE EXIT"
          subtitle="The Decision That Changed Everything"
          content="College felt like a prison of outdated curriculum and endless theory. While classmates studied textbooks from 2010, I was already building real applications and learning cutting-edge frameworks. The day I walked out was the day I truly started my education."
          accentColor="pink"
        >
          <div className="space-y-6 max-w-md">
            <motion.div 
              className="neon-box-pink p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <GraduationCap className="w-8 h-8 text-neon-pink" />
                <div>
                  <h4 className="font-cyber font-bold text-lg">College Dropout</h4>
                  <p className="text-sm text-muted-foreground">2019</p>
                </div>
              </div>
              <p className="text-sm text-foreground">
                "This isn't the path for me. I'm going to build my own future."
              </p>
            </motion.div>

            <CodeSnippet 
              title="The Final Decision"
              code={`// My last day in college
const collegeLife = {
  outdated: true,
  theoretical: true,
  practical: false
};

if (!collegeLife.practical) {
  dropOut();
  startRealLearning();
}`}
              language="javascript"
              description="The moment I realized traditional education wasn't for me."
              accentColor="pink"
            />
          </div>
        </Chapter>
      </section>

      {/* Chapter 2: The Grind */}
      <section id="grind">
        <Chapter
          title="THE GRIND"
          subtitle="Self-Learning, Failures, and Breakthroughs"
          content="14-hour coding days. Tutorial hell. Imposter syndrome. Failed projects. But with every failure came a lesson. Every bug fixed was a small victory. I lived and breathed code, turning my bedroom into a development sanctuary where dreams were compiled into reality."
          accentColor="blue"
          reverse
        >
          <div className="space-y-6 max-w-md">
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {[
                { skill: "HTML/CSS", level: 95 },
                { skill: "JavaScript", level: 90 },
                { skill: "React", level: 88 },
                { skill: "Node.js", level: 85 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  className="neon-box p-4 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Code className="w-6 h-6 text-neon-blue mx-auto mb-2" />
                  <div className="text-xs font-cyber font-bold">{skill.skill}</div>
                  <div className="text-xs text-muted-foreground">{skill.level}%</div>
                </motion.div>
              ))}
            </motion.div>

            <CodeSnippet 
              title="The Learning Loop"
              code={`const learningPath = async () => {
  while (!mastery) {
    try {
      await buildProject();
      await learnFromMistakes();
      skills.level++;
    } catch (error) {
      console.log('Learning from:', error);
      continue;
    }
  }
};

learningPath(); // Never stops`}
              language="javascript"
              description="The endless cycle that transformed me from beginner to expert."
              accentColor="blue"
            />
          </div>
        </Chapter>
      </section>

      {/* Chapter 3: The Mastery */}
      <section id="mastery">
        <Chapter
          title="THE MASTERY"
          subtitle="Frontend and Full-Stack Skills Perfected"
          content="The breakthrough moment when everything clicked. Complex state management became second nature. API integrations were effortless. I could architect full-stack applications from scratch and optimize them for performance. The student had become the master."
          accentColor="green"
        >
          <div className="space-y-6 max-w-md">
            <motion.div 
              className="neon-box-green p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Rocket className="w-8 h-8 text-neon-green" />
                <div>
                  <h4 className="font-cyber font-bold text-lg">Full-Stack Master</h4>
                  <p className="text-sm text-muted-foreground">2021-2022</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>React/Next.js</span>
                  <span className="text-neon-green">Expert</span>
                </div>
                <div className="flex justify-between">
                  <span>Node.js/Express</span>
                  <span className="text-neon-green">Expert</span>
                </div>
                <div className="flex justify-between">
                  <span>Database Design</span>
                  <span className="text-neon-green">Expert</span>
                </div>
              </div>
            </motion.div>

            <CodeSnippet 
              title="Mastery Unlocked"
              code={`class DeveloperEvolution {
  constructor() {
    this.skills = new Map();
    this.projects = [];
    this.confidence = 100;
  }

  async masterTechnology(tech) {
    const mastery = await this.deepDive(tech);
    this.skills.set(tech, mastery);
    return this.buildSomethingAwesome();
  }

  get status() {
    return 'Full-Stack Master 🚀';
  }
}`}
              language="javascript"
              description="When coding became an art form, not just a skill."
              accentColor="green"
            />
          </div>
        </Chapter>
      </section>

      {/* Chapter 4: The Agency */}
      <section id="agency">
        <Chapter
          title="THE AGENCY"
          subtitle="Building a Team and Pushing Boundaries"
          content="Success attracts opportunity. Clients started reaching out. Projects became bigger and more complex. I assembled a team of talented developers who shared the same rebellious spirit. Together, we built digital experiences that pushed the boundaries of what's possible."
          accentColor="purple"
          reverse
        >
          <div className="space-y-6 max-w-md">
            <motion.div 
              className="neon-box p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Building2 className="w-8 h-8 text-neon-purple" />
                <div>
                  <h4 className="font-cyber font-bold text-lg">Agency Founder</h4>
                  <p className="text-sm text-muted-foreground">2022-Present</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="text-2xl font-cyber font-bold text-neon-purple">50+</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-cyber font-bold text-neon-purple">25+</div>
                  <div className="text-muted-foreground">Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-cyber font-bold text-neon-purple">5</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-cyber font-bold text-neon-purple">100%</div>
                  <div className="text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {[Users, Code, Zap].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-16 h-16 neon-box rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-neon-purple" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Chapter>
      </section>

      {/* Chapter 5: The Future */}
      <section id="future">
        <Chapter
          title="THE FUTURE"
          subtitle="Vision and Call to Action"
          content="This is just the beginning. The future holds bigger challenges, more innovative solutions, and endless possibilities. The dropout who was told they'd never succeed is now building the digital future, one line of code at a time. Ready to be part of this journey?"
          accentColor="blue"
        >
          <div className="space-y-6 max-w-md">
            <motion.div 
              className="neon-box p-8 rounded-2xl text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Rocket className="w-12 h-12 text-neon-blue mx-auto mb-4 animate-float" />
              <h4 className="font-cyber font-bold text-2xl mb-2 text-gradient-neon">
                Ready to Disrupt?
              </h4>
              <p className="text-muted-foreground mb-6">
                Let's build the future together. Your project deserves the dropout advantage.
              </p>
              <motion.button 
                className="btn-cyber w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {[
                { label: "Innovation", value: "∞" },
                { label: "Passion", value: "100%" },
                { label: "Results", value: "Guaranteed" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="neon-box p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="text-xl font-cyber font-bold text-neon-blue">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Chapter>
      </section>
    </div>
  );
};

export default Index;