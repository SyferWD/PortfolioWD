
import Contact from "./components/Contact";
import DarkModeBtn from "./components/DarkModeBtn";
import { Hero } from "./components/Hero";
import { Projects } from "./components/projects/Projects";
import { Toolkit } from "./components/Toolkit";

export default function Home() {

  return (
    <main className="bg-[#e6e7ee] dark:bg-[#121212]">
        <Hero />
        <Toolkit />
        <Projects />
        <Contact />
        <DarkModeBtn />
    </main>
  );
}
