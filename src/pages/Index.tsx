import { Hero } from "@/components/DropoutStory/Hero";
import { AboutMe } from "@/components/DropoutStory/AboutMe";
import { Skills } from "@/components/DropoutStory/Skills";
import { Projects } from "@/components/DropoutStory/Projects";
import { Experience } from "@/components/DropoutStory/Experience";
import { Blog } from "@/components/DropoutStory/Blog";
import { Contact } from "@/components/DropoutStory/Contact";
import { Navigation } from "@/components/DropoutStory/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;