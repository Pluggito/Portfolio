import Image from "next/image";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Features from "./components/features";


export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <Home/>
      <About/>
      <Skills/>
      <Features/>
      <Contact/>
    </div>
  );
}
