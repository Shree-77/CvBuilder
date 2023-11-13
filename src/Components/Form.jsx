

import Operations from "./Operators"
import Person from "./PersonDetails"
import "../styles/form.css"
import AddEduction from "./Education-Details/AddEducation"
import AddExperience from "./Experience/AddExperience"

function Form() {

  return (
    <> 
    <div className="Form">
       <Operations />
       <Person />
       <AddEduction />
       <AddExperience />
    </div>
    </>
  )
}

export default Form
