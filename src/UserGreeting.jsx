
import PropTypes from 'prop-types'
import './index.css';

function UserGreeting(props){



    const Message = <> 
                        <h2 className='message'> Hello {props.user} </h2>
                        <button><a href="#">Log in</a></button>
                    </>;

    const Message1 = <h2>Prohibited</h2>  

    if(props.username){
        return(props.username ?  Message : Message1 )
    }else if (props.isLoggedIn){
        return(props.isLoggedIn ? <h2>Welcome {props.user} </h2> : <h2> Please login to Continue </h2>)
    }
   
}


UserGreeting.propTypes = {

username1: PropTypes.string,
username: PropTypes.bool,

}

export default UserGreeting