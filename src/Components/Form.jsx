
import Experience from "./Experience"
import Operations from "./Operators"
import Person from "./PersonDetails"
import "../styles/form.css"
import AddEduction from "./Education-Details/AddEducation"

function Form() {

  return (
    <> 
    <div className="Form">
       <Operations />
       <Person />
       <AddEduction />
       <Experience />
    </div>
    </>
  )
}

export default Form
