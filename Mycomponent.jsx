import React, {useState} from 'react'


function array(){

const [games, setGames] = useState(["Valorant","Genshin","Sims"]);

function addGame(){

    const newGames = document.getElementById("gameInput").value;
    document.getElementById("gameInput").value="";

    setGames(g => [...g, newGames]);


}

function deleteGame(index){

    setGames(games.filter((_,i) => i !== index))

}

return(
    <div className='ml-10'>
        <p className="text-5xl text-center">List of Games</p>

        <ul className='text-center mt-10'>
            {games.map((game, index) => <li key={index} onClick={() => deleteGame(index)}> {game}</li>)}
        </ul>
        
        <div className='flex flex-row items-center justify-center mt-10'>
         <input className="border border-blue-600" id="gameInput" placeholder="Enter a game" type="text"></input>
         <button className="border border-black ml-5" onClick={addGame}>Add game</button>
        </div>
        
    </div>
);

}

export default array