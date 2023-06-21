import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Frontend from "./components/Frontend/Frontend";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import Mobile from "./components/Mobile/Mobile";
import Navbar from "./components/Navbar/Navbar";
import Python from "./components/Python/Python";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Introduction />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Frontend />
      <Mobile />
      <Python />
      <Contact></Contact>
    </>
  );
}

export default App;
