
import { useState } from "react";

function Button2 (){

    const [isHovered, setIsHovered] = useState(false);
    
    const styles ={

        backgroundColor: isHovered? "DarkOrange" : "orange",
        fontWeight: "Bolder",
        padding: "1.5%",
        borderRadius: "5px",
        transition: "backgroundColor 0.5s escape, transform 0.7s escape",
    }

return (

    <button style={styles}
    onMouseEnter={() => setIsHovered(true)}
    onmouseLeave ={() => setIsHovered(False)}  
    >Select Me</button>

);


}

export default Button2


