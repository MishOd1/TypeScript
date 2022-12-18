import React from 'react';

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/TS.png';
// import Tailwind from '../assets/tailwind.png';
// import Python from '../assets/Python69.png'
// import Pine from '../assets/pine.png'

const Skills = () => {
    const HTML = require("../assets/html.png")
    const CSS = require("../assets/css.png")
    const JavaScript = require("../assets/javascript.png")
    const ReactImg = require("../assets/react.png")
    const Node = require("../assets/TS.png")
    const Tailwind = require("../assets/tailwind.png")
    const Python = require("../assets/Python69.png")
    const Pine = require("../assets/pine.png")
  return (
    <div  className='w-full h-screen bg-[#15243f] text-gray-300'>
      {/* Container */}

      <div className='max-w-[75%] ml-[12.5%] mx-auto p-4 flex text-center flex-col justify-center w-full h-full'>
          <div>
              <p  className='text-4xl text-center font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4 text-center'>// These are the technologies I've worked with </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]'>
                  <img className='w-[40%] mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[40%] mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[40%] mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[40%] mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>React.JS</p>
              </div>

              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[50%] mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>TypeScript</p>
              </div>

              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[40%] mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TailWindCSS</p>
              </div>
              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[50%] mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-6'>Python</p>
              </div>
              <div className='shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500  hover:shadow-[#53d8e96c]'>
                  <img className='w-[50%] mx-auto' src={Pine} alt="HTML icon" />
                  <p className='my-6'>PineScript</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
