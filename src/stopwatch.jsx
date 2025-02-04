    import React, {useState, useEffect, useRef} from 'react'

    function stopwatch (){

        const [isRunning , setIsRunning] = useState(false);
        const [elapsedTme, setIsElapsedTime] = useState(0);
        const intervalIdRef = useRef(null);
        const startTimeRef = useRef(0);

        useEffect (() => {
            if(isRunning){
                intervalIdRef.currenL = setInterval((intervalIdRef) => {
                   setIsElapsedTime(Date.now() - startTimeRef.current); 
                }, 10);
            }
           return () => {
            clearInterval(intervalIdRef.currenL);
           }

        }, [isRunning]);

        function start(){
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTme

        }

        function stop (){
            setIsRunning(false);
        }


        function reset(){
            setIsElapsedTime(0);
            setIsRunning(false);
        }

        function formatTime(){

            let hours = Math.floor(elapsedTme /(1000 * 60 * 60));
            let minutes = Math.floor(elapsedTme /(1000 * 60) % 60);
            let seconds = Math.floor(elapsedTme /(1000) % 60);
            let milliseconds = Math.floor(elapsedTme % 1000 / 10);

            return `${hours}:${minutes}:${seconds}:${milliseconds}`
        }

    return(
        <div className='flex flex-col justify-center min-h-screen items-center bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg rounded-2xl p-10'>
        <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-8'>
          <div className='text-2xl font-semibold mb-6'>{formatTime()}</div>
          <div className='flex flex-row justify-between gap-4'>
            <div>
              <button className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-green-300' onClick={start}>Start</button>
            </div>
            <div>
              <button className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-yellow-300' onClick={reset}>Reset</button>
            </div>
            <div>
              <button className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-red-300' onClick={stop}>Stop</button>
            </div>
          </div>
        </div>
      </div>
    );


    }

    export default stopwatch