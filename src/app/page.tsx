import Image from "next/image";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import SkillsTimeline from "../components/skills";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <About />
      <SkillsTimeline/>
      <Features />
      <Contact />
    </div>
  );
}
