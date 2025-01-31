import image from './assets/picture.jpg'

function Card(){

return(
<>
<div class ="card1" className= "card">
    <img class="image" src={image} alt="This is my profile picture"></img>
    <h2 class="title">Rucen Limon</h2>
    <p class="text">Currently Studying Bachelor of Science in Information Technology.</p>
</div>

<div class ="card2" className ="card">
<img class="image" src={image} alt="This is my profile picture"></img>
    <h2 class="title">Rucen Limon</h2>
    <p class="text">Currently Studying Bachelor of Science in Information Technology.</p>
</div>
</>
);


}

export default Card