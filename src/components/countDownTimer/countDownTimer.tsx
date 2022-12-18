import React, { useState, useEffect } from "react";
import "./countDownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountDownTimerUtils";

const defaultRemainingTime = {
  milliseconds: "00",
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
type defaultRemainingTime = {
    milliseconds: any,
    seconds: any,
    minutes: any,
    hours: any,
    days: any,
  };

interface CountdownTimerProps {
  countdownTimestampMs: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  countdownTimestampMs,
}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown:any) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }


  return (
    <div className="countdown-timer1 ">
      <footer className="footer mt-[-5%] text-[#15243f]">'</footer>
      <header>
        <div className="mt-[20vh] ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-red-50">
            CountDown To The Next Bitcoin Halving
          </p>
          <p className="py-4 text-gray-300">
            // Next Halving, and some charts to explain the effect of halving on
            BTC price
          </p>
        </div>
      </header>
      <div className="max-w-[100%] lg:max-w-[70%] lg:ml-[15%] mx-auto p-4 flex text-center flex-col justify-center w-full h-full">
        <div className="w-[90%] ml-[5%] grid grid-cols-5 lg:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
            <span className="text-2xl md:text-8xl text-pink-600 md:text-[#7692e6]">
              {remainingTime.days}
            </span>
            <br></br>
            <span id="hi" className="text-sm md:text-3xl">
              Days
            </span>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
            <span className="text-2xl md:text-8xl text-pink-600 md:text-[#7692e6]">
              {remainingTime.hours}
            </span>
            <br></br>
            <span id="hi" className="text-sm md:text-3xl">
              Hours
            </span>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
            <span className="text-2xl md:text-8xl text-pink-600 md:text-[#7692e6]">
              {remainingTime.minutes}
            </span>
            <br></br>
            <span id="hi" className="text-sm md:text-3xl">
              Minutes
            </span>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
            <span className="text-2xl md:text-8xl text-pink-600 md:text-[#7692e6]">
              {remainingTime.seconds}
            </span>
            <br></br>
            <span id="hi" className="text-sm md:text-3xl">
              Seconds
            </span>
          </div>
          <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
            <span className="text-2xl md:text-8xl text-pink-600 md:text-[#7692e6]">
              {remainingTime.milliseconds}
            </span>
            <br></br>
            <span id="hi" className="text-sm md:text-3xl">
              Milliseconds
            </span>
          </div>
        </div>
      </div>
      <h2 className="text-[50px] mt-40 text-pink-50 max-w-[70%] ml-[15%]">So, What is Bitcoin halving?</h2>
 
      <p className='text-[25px] max-w-[70%] ml-[15%] text-blue-300  '>In simple words, bitcoin halving event is the event where the reward of bitcoin minners is cut in half<br></br>
      and this event usually takes place every 4 Years -apporxemtly-, and it historiclly has been a market rally trigger!<br></br>
      </p>
      <p className='text-[18px]  max-w-[60%] ml-[20%] text-gray-400  mt-16 text-left'>
        <br></br>
        So bitcoin has a tottal supply of 21,000,000 Bitcoins, meaning that there will only ever be 21M bitcoins in existense!<br></br>
        and we as well know from the quiz we took earlier that bitcoin is minned by super computers, these minners
        are paid in bitcoins, at the very beggining in 2009 these minners used to get rewarded with 50 bitcoins (around 800K$ at current price of 16K).<br></br><br></br>
        a couple of years later first halving happend in 2013 and the reward became 25 bitcoins,
        it stayed that way for more 4 years until year 2016 where the second halving took place and reward became 12.5 bitcoins,
        the halving after that took place in may 2020, and the minners reward became 6.25 bitcoins, and it will stay that way until year 2024 where the reward will become 3.125 bitcoins.<br></br>
      </p>
   
    </div>
  );
};

export default CountdownTimer;
