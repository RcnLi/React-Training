
import Student from './Student.jsx'

function App(){


return(

    <>
          <Student name="SpongeBob" age={30} isStudent={true} id={51234} section="IT"  />
          
          <Student name="Patrick" age={15}  isStudent={false} id={23134} section="IT"  />

          <Student name="Squidward" age={50} isStudent={false} id={55214} section="IT"  />

          <Student name="Sandy" age={23}  isStudent={true}  id={51234} section="IT"    />

          <Student></Student>

    </>

    );


}

export default App