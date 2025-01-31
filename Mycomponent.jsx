import React, {useState} from 'react'


function bestGame(){

    const [game, setGame] = useState({Name: "Valorant", Genre: "FPS", Year: 2021 ,})

    function nameChanger(event){
        setGame({...game, Name: event.target.value})
    }
    function genreChanger(event){
        setGame({...game, Genre: event.target.value})
    }
    function yearChanger(event){
        setGame({...game, Year: event.target.value})
    }
return(


    <div className='ml-10 mt-10'>
        <p className="text-center">BEST GAME OF THE YEAR</p>
        <div className='flex flex-row text-center items-center justify-center mt-10'>
            <p className="text-center">{game.Name}</p>
            <p className="text-center ml-10 mr-10">{game.Genre}</p>
            <p className="text-center">{game.Year}</p>
        </div>
    
        <div className='flex flex-row ' value={game.Name} onChange={nameChanger}> 
            <p>Name: </p>
            <input  className='border border-black' type="text" />
        </div>
        <div className='flex flex-row ' value={game.Genre} onChange={genreChanger}> 
            <p>Genre: </p>
            <input  className='border border-black' type="text" />
        </div>
        <div className='flex flex-row ' value={game.Year} onChange={yearChanger}> 
            <p>Year: </p>
            <input className='border border-black'type="number" value={game.Year}/>
        </div>


    </div>
)





}

export default bestGame