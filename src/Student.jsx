
import PropTypes from 'prop-types'


function Student(props){

return(

<div className="student">
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent ? "Yes" : " No"} </p>
    <p>Student_Id: {props.id}</p>
    <p>Section: {props.section}</p>
    <p>&copy; Batch: {new Date().getFullYear()} </p>
</div>


);


}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    id: PropTypes.number,
    section: PropTypes.string,
}
Student.defaultProps ={
    name: "Guest",
    age: 0,
    isStudent: false,
    id: 11111,
    section: "TBA",
}

export default Student