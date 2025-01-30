
import Button from './button.jsx'
import Profilepicture from './Profilepicture.jsx'

function App(){

  const divflip = (e) => e.target.textContent = "Hello";

return(
  <>
  <div  className='h-screen flex justify-center items-center'>

     <div className= 'rounded-md border border-gray-950 w-48 flex-col justify-center items-center bg-black'>

        <div className= 'w-auto h-auto p-4'>
          <Profilepicture/>
        </div>

        <div onClick={(e) => divflip(e)} className='text-blue-500 text-center bg-slate-400'>blue</div> 

    </div>

  </div>
 
  </>

);



}

export default App