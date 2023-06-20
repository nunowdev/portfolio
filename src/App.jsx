import About from "./components/About/About";
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
    </>
  );
}

export default App;
