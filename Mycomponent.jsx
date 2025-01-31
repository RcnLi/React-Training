
import React, {useState} from 'react';


function mycomponent(){

    let [name, setName] = useState("Guest");

    let [age, setAge] = useState(0);

    let [isEmployed, setEmployed] = useState(false);

    const updateName = () => { 
        setName("Rucen");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    
    const employementStatus = () => {
        setEmployed(!isEmployed);
    }



    return(
        <>
        <div className='h-screen flex justify-center  items-center'>
        <div className='flex-col justify-center  items-center'>

        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>employed: {isEmployed}</p>
        </div>

        <div className='flex-col justify-center items-center'>
            <button onClick={updateName} className='border-black bg-orange-700'>set Name</button>
            <button onClick={incrementAge} className='border-black bg-orange-700 m-3'>set Age</button>
            <button onClick={employementStatus} className='border-black bg-orange-700 m-3'>Employed</button>
        </div>
        </div>
        </div>

        </>


    );




}

export default mycomponent