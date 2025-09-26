import './App.css'
import AnimatedBackground from './components/animated_background';
import Contact from './sections/contact';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Welcome from './sections/welcome';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Welcome />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
