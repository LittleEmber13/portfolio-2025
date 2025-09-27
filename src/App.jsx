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
      <div className='solid-background'>
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
