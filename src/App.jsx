import './App.css'
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import Contact from './sections/contact';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Welcome from './sections/welcome';

function App() {
  return (
    <>
      <StarsBackground
        speed={250}
        starColor='#ffffff63'
        className="fixed -z-10"
      />
      <div className='w-full justify-items-center'>
        <div className="justify-items-center max-w-[1000px] px-8">
          <Welcome />
            <Projects />
            <div className="solid-background">
            <Skills />
            <Contact />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
