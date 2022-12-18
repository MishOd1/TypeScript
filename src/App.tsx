import React from 'react';
import Graph2 from './CountDown/Graph2';
import Graph3 from './CountDown/Graph3';
import CardDemo from './components/Cards';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card3 from './components/Quiz';
import Skills from './components/Skills';
import Todo from './components/Todo2';

export default function App(){
  return(
    <div className='bg-[#15243f]'>
      <Navbar />
      <Home />
      <Skills />
      <Todo />
      <Card3 />
      <Contact />
      
    </div>
  )
}