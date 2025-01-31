


function Button(){

    const handleclick = (e) => e.target.textContent = "Clicked" ;

    //let count = 0;

    /*const handleClick = (name) => {
        if(count < 3){

            count++;
            console.log(`${name}you clicked me ${count} time/s `)
        }else{
            alert(`${name} stop clicking me`)

        }

    };*/
    //const handleClick2 = (name) => console.log(`${name}stop clicking me`);


return(
<>
    <div className = ' text-center text-red-500' >
        red
        <br></br>
      <button  onClick={(e) => handleclick(e)}>Click me</button>
    </div>
</>



);


}

export default Button