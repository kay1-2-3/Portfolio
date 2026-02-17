import {Navbar} from "@/layout/navbar";
import {Hero} from "@/sections/hero";
import {About} from "@/sections/about";
import {Projects} from "@/sections/projects";
import {Experience} from "@/sections/experience";
import {Testimonials} from "@/sections/testimonials";
import {Contact} from "@/sections/contact";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App
