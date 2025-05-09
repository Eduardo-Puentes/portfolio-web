import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsPreview from './components/ProjectsPreview';
import ContactForm from './components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <ContactForm />
    </>
  );
}