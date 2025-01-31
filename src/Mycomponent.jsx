
import React, {useState} from 'react'

function listGames(){

const [games, setCar] = useState([])
const [yearGames, setYear] = useState(new Date().getFullYear());
const [genreGames, SetGenre] = useState("");
const [nameGames, SetName] = useState("");

function addGames(){

    const listg = {Year: yearGames, Genre: genreGames, Name: nameGames};
    setCar (g => [...g, listg]);

}

function removeGames(index){


}

function addYear(event){
    setYear(event.target.value)
}

function addGenre(event){
    SetGenre(event.target.value)
}
function addName(event){
    SetName(event.target.value)
}


return(

    <div>
        <p>List of Games</p>

        <ul>
            {games.map((game,index) => <li key={index}>{game.yearGames} {game.genreGames} {game.nameGames}</li>)}
        </ul>



        <div className='flex flex-col items-center justify-center'>
            <input className='border border-black mt-20' type='number' value={yearGames} onChange={addYear}/>
            <input className='border border-black mb-5 mt-5' type='text' value={genreGames} onChange={addGenre}/>
            <input className='border border-black' type='text' value={nameGames}  onChange={addName}/>
            <button onClick={addGames}></button>
        </div>
       
        
        
        
        <button onClick={addGames}>Add games</button>
    </div>
)



}

export default listGames