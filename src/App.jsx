import './App.css'
import { StarsBackground } from './components/animate-ui/components/backgrounds/stars';
import NavBar from './components/nav_bar';
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
        <NavBar />
        <div className="justify-items-center max-w-[1200px] px-8">
          <Welcome id='welcome' />
          <Projects id='projects' />
          <div className="solid-background">
            <Skills id='skills' />
            <Contact id='contact' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
