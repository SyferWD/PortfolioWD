import Contact from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/projects/Projects";
import { Toolkit } from "./components/Toolkit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Toolkit />
      <Projects />
      <Contact />
    </main>
  );
}
