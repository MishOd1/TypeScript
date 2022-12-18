import './style.css'
import React from 'react'
import EDU from '../components/countDownTimer/HalvingEDU';
import CountdownTimer from '../components/countDownTimer/countDownTimer';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
export default function Countdown() {
  return (
    <div className='mt-[10rem]'>
      
      <div className="App -z-999 mb-10" id="halving111" >
      <CountdownTimer
      countdownTimestampMs={1711251267000}/>
        <div className="Graph2 w-[90%] ml-[5%] lg:w-[70%] lg:ml-[15%] -z-999 mt-10">
          <Graph2/>
          <EDU />
          <Graph3 />
        </div>
        
        
      </div>
   
    </div>
  );
}

