import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <footer>
        <div className="container">
          <p className="footer-text">built by <span>namit joshi</span> · 2026</p>
        </div>
      </footer>

      <ChatBot />
    </>
  );
}

export default App;
