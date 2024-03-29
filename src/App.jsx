import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Frontend from "./components/Frontend/Frontend";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";

import Navbar from "./components/Navbar/Navbar";

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

      <Contact />
      <Footer />
    </>
  );
}

export default App;
