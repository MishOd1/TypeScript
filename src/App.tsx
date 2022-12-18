
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card3 from './components/Quiz';
import Skills from './components/Skills';
import Todo from './components/Todo2';
import Countdown from './CountDown/CountDown';
export default function App(){
  return(
    <div className='bg-[#15243f]'>
      <Navbar />
      <Home />
      <Skills />
      <Todo />
      <Card3 />
      <Countdown />
      <Contact />
      
    </div>
  )
}