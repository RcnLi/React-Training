
import PropTypes from 'prop-types'

function UserGreeting(props){

    if(props.username){
        return(props.username ? <>
        <h2>Hello {props.user} </h2>
        <button><a href="#">Log in</a></button>
        </>   
            : <h2>You are not signed in</h2>  )
    }else if (props.isLoggedIn){
        return(props.isLoggedIn ? <h2>Welcome {props.user} </h2> : <h2> Please login to Continue </h2>)
    }
   
}


UserGreeting.propTypes = {

username1: PropTypes.string,
username: PropTypes.bool,

}

export default UserGreeting