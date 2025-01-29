

function List(){

const Elders = [
                {Name: "Rodel", Age: 52, address: "Quezon City", birthdate: "2003" },
                {Name: "Rucen", Age: 62, address: "Valenzuela City", birthdate: "2002" },
                {Name: "Princess", Age: 72, address: "Luzon City", birthdate: "2004" },
                {Name: "Deniel", Age: 82, address: "Luzon City", birthdate: "2004" },
                {Name: "Ervin", Age: 102, address: "Luzon City", birthdate: "2002" },
                {Name: "Carl", Age: 122, address: "Bulacan", birthdate: "2003" },
                {Name: "Kristhine", Age: 32, address: "Quezon City", birthdate: "2002" },
                {Name: "Christal Sofia", Age: 22, address: "Bulacan", birthdate: "2002" },
                ];

    Elders.sort((a,b) => a.Name.localeCompare(b.Name));         


    const nameofElders = Elders.map(elder => <li>
                                                {elder.Name} &nbsp;
                                                {elder.birthdate} &nbsp;

    </li>);

     
    Elders.sort((a, b) => a.Age - b.Age );        

    const ageofElders = Elders.map(elder => <li>
                                                {elder.Age} &nbsp;
                                                {elder.Name} 
                                            </li>);

    const listofElders = Elders.map(elder => <li>{elder.Name} &nbsp;
                                                    {elder.Age} &nbsp;
                                                    {elder.address} &nbsp;
                                                    {elder.birthdate} &nbsp;
                                                    </li>); 

        
    Elders.sort((a,b) => b.Name.localeCompare(a.Name));

    const nameofElders1 = Elders.map( elder => <li>
                                                {elder.Name} &nbsp;
                                                {elder.address} &nbsp;

    </li>);

    const birthdateofelder = Elders.filter( elder => elder.birthdate == 2002);

    const Agefilter = birthdateofelder.map( birthdateofelder => <li>
                                                {birthdateofelder.Name} &nbsp;
                                                {birthdateofelder.birthdate} &nbsp;
    </li>);


    const ageuporder = Elders.filter( elder => elder.Age >= 100);

    const ageorder = ageuporder .map( ageuporder  => <li>
                                                {ageuporder .Name} &nbsp;
                                                {ageuporder .Age} &nbsp;
    </li>);

    const elderaddress = Elders.filter( elder => elder.address == "Quezon City");

    const adressofelder = elderaddress.map( elderaddress => <li>
                                                        {elderaddress.Name} &nbsp;
                                                        {elderaddress.address} &nbsp;


    </li>);

    const agedown1 = Elders.filter(elder => elder.Age <= 50)


    const agedown = agedown1.map(agedown1 => <li>
                                             {agedown1.Name} &nbsp;
                                             {agedown1.Age} &nbsp;
                                        </li>);


    Elders.sort((a,b) => a.Age - b.Age)
    
    const age1 = Elders.map(age2 => <li> {age2.Name} &nbsp;
                                        {age2.Age}
    </li>);
   

    return(
    
     <>
     <hr></hr>

     <div>   
        <h2>Sorted by Age</h2>  
        <ul>{ageofElders}</ul>   
    </div>

    <div>   
        <h2>Sorted by Age ver 2</h2>  
        <ul>{age1}</ul>   
    </div>
      
     <hr></hr>

     <div>     
        <h2>List</h2>
        <ul>{listofElders}</ul>  
    </div>

     <hr></hr>

     <div> 
        <h2>Alphabetical Order</h2>   
        <ul>{nameofElders}</ul>   
    </div>

     <hr></hr>
       
     <div> 
        <h2>Reverse Alphabetical Order</h2>   
        <ul>{nameofElders1}</ul>   
    </div>

    <hr></hr>

    <div> 
        <h2>Age Order</h2>   
        <ul>{ageorder}</ul>   
    </div>

    <hr></hr>

    <div> 
        <h2>birthdate</h2>   
        <ul>{Agefilter}</ul>   
    </div>

    <hr></hr>
        
    <div> 
        <h2>Address</h2>   
        <ul>{adressofelder}</ul>   
    </div>    

    <hr></hr>
        
    <div> 
        <h2>Age</h2>   
        <ul>{agedown}</ul>   
    </div>   
     </>   
    



);



}

export default List





