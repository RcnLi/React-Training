
import React, {useState} from 'react'

function hook(){

    const [name, setName] = useState("Guest");
    const [contact, setContact] = useState("+63");
    const [civil, setCivil] = useState("");
    const [gender, setGender] = useState("");
    const [birthdate,setBirthdate] = useState("");

    function nameChange (event){
        setName(event.target.value)
    }
    function contactChange (event){
        setContact(event.target.value)
    }
    function civilChange (event){
        setCivil(event.target.value)
    }
    function genderChange (event){
        setGender(event.target.value)
    }
    function birthdateChange (event){
        setBirthdate(event.target.value)
    }

return( <>

    <div className='h-screen flex flex-col justify-start items-start bg-gray-400 w-[100] '>
        <div className='mt-10 ml-10' >
            <p>{name}</p>
            <input value={name} onChange={nameChange} className='border-4 border-indigo-500 rounded-lg w-[200%]'></input>
        </div>
        
        <div className='mt-5 ml-10'>
            <p>{contact}</p>
            <input value={contact} onChange={contactChange} className='border-4 border-indigo-500 rounded-lg w-[200%]'></input>
        </div>

        <div className=' flex flex-col mt-5 ml-10'>
           

            <label>
            <input  type="radio" value="Single" checked ={ civil === "Single" } onChange={civilChange}  className='border-2 border-indigo-500 rounded-lg w-5 h-5'/>
            <span className='ml-2'>Single</span>  
            </label>
            <label>
            <input  type="radio" value="Married" checked ={ civil === "Married" } onChange={civilChange}  className='border-2 border-indigo-500 rounded-lg w-5 h-5'/>
            <span className='ml-2'>Married</span>  
            </label>
           
            <p>Status: {civil}</p>
        </div>

        <div className=' flex flex-col mt-5 ml-10'>
            <select value={gender} onChange={genderChange}>
                <option value="">Select an Option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Preger not to Say">Prefer not to Say</option>
            </select>

            <p>Gender: {gender}</p>
            

        </div>

        <div className="mt-5 ml-10">
            <input type="date" value={birthdate} onChange={birthdateChange} className="border-4 border-indigo-500 rounded-lg p-2"/>

            <p className="mt-5 ">Birthdate: {birthdate}</p>
        
        </div>





    </div>



        </>
     )

}

export default hook