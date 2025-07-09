import About from "./componet/About";
import Contact from "./componet/Contact";
import Footer from "./componet/Footer";
import Header from "./componet/Header";
import Homee from "./componet/Home";
import Projects from "./componet/Project";
import Skills from "./componet/Skills";


export default function Home() {
  return (
    <div>
      <Header/>
      <Homee />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
