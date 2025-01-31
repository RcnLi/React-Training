import React, {useState} from 'react'


function Counter(){


    const [count, setCount] = useState(0);

    function Increment(){
        setCount(c => c +1) 
    }
    function IncrementBY2(){
        setCount(c => c +1) 
        setCount(c => c +1) 
    }
    function IncrementBY3(){
        setCount(c => c +1) 
        setCount(c => c +1) 
        setCount(c => c +1) 
    }

    function decrement(){
        setCount(count -1 )
    }
    function decrementBY2(){
        setCount(count - 1 )
        setCount(count - 2 )
    }
    function decrementBY3(){
        setCount(count -1 )
        setCount(count -1 )
        setCount(count -1 )
    }

    function Reset(){
        setCount(0)
    }


    return(
        <> 
        
        <p>count: {count}</p>
        <div className='flex flex-row ml-10 '>
            <button className='border border-blue-500 m-5' onClick={Increment}>Increment by 1</button>
            <button className='border border-blue-500 m-5' onClick={IncrementBY2}>Increment by 2</button>
            <button className='border border-blue-500 m-5' onClick={IncrementBY3}>Increment by 3</button>
          
        </div>
        <div className='flex flex-row m-5 '>
            <button className='border border-blue-500 ml-10' onClick={decrement}>Decrement by 1</button>
            <button className='border border-blue-500 ml-10' onClick={decrementBY2}>Decrement by 2</button>
            <button className='border border-blue-500 ml-10' onClick={decrementBY3}>Decrement by 3</button>
        </div>
        <div className='flex flex-row m-5 '> 
            <button className='border border-blue-500 ml-10' onClick={Reset}>Reset</button>
        </div>
        
        
        </>
       
    )





}

export default Counter