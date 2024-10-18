
import { cookies } from "next/headers";
import Contact from "./components/Contact";
import DarkModeBtn from "./components/DarkModeBtn";
import { Hero } from "./components/Hero";
import { Projects } from "./components/projects/Projects";
import { Toolkit } from "./components/Toolkit";

export default function Home() {

  const theme = cookies().get('theme')?.value ?? "";

  return (
    <main className="bg-[#e6e7ee] dark:bg-[#121212]">
        <DarkModeBtn theme={theme}/>
        <Hero />
        <Toolkit />
        <Projects />
        <div className="py-6" id="contact"/>
        <Contact />
    </main>
  );
}
