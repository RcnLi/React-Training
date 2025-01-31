
import React, {useState} from 'react'

function todoList(){

    const [todoo, setTask] = useState(["Eat","Take a shower", "project"]);

    const [newTodo, setNew] = useState ("");


    function handleInputChange(event){  
        setNew(event.target.value);
    }

    function addTodo() {
        if (newTodo.trim() !== "") { // Correct reference to newTodo
            setTask(t => [...t, newTodo]);
            setNew("");
        }
    }
    

    function deleteTodo(index){
        const updatedTasks = todoo.filter((element, i) => i !== index );
        setTask(updatedTasks);

    }

    function upTodo(index) {
        if (index > 0) {
            const updatedTasks = [...todoo];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    

    }
    function downTodo(index) {
        if (index < todoo.length - 1) {
            const updatedTasks = [...todoo];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    
    }



return(

    <>
        <div className='h-screen bg-red-300 flex items-center justify-center'>

            <div className='bg-yellow-50 flex  w-[80%] h-[80%] rounded-lg flex-col'>

               

                    <div className='flex text-start h-[30%]'>
                            <h1 className='md:font-bold p-20'>To-Do-List</h1>
                            
                    </div>

                    <div className=' w-200 flex flex-row'>
                        <div className='w-[65%] h-full'>

                                <ol>
                                    {todoo.map((todo,index) => 
                                                            <li className=" text-center"key={index}>
                                                                <div className='flex-row'>

                                                                    {todo} 
                                                                    
                                                                    
                                                                    <button className='ml-5 border-2 rounded-md border-black bg-white text-black text-justify' onClick={() => deleteTodo(index)}>Delete</button>
                                                                    <button className='ml-5 border-2 rounded-md border-black bg-white text-black text-justify' onClick={() => upTodo(index)}>Up</button>
                                                                    <button className='ml-5 border-2 rounded-md border-black bg-white text-black text-justify' onClick={() => downTodo(index)}>Down</button> 
                                                                    
                                                                </div>
                                                                
                                                                
                                                            </li>)}
                                </ol>
                        </div>

                        <div className='flex flex-col items-center h-[100%] justify-center'>
                            <input className='border-2 mt-10  border-solid h-10 border-black rounded-lg' value={newTodo} onChange={handleInputChange} type="text" placeholder="Enter a Task"/>
                            <button className="border-black mt-10 border-2 rounded-md" onClick={addTodo}>Add task</button>
                        </div>

                    </div>  


                
                
                


            </div>


        </div>
    </>

);



}

export default todoList