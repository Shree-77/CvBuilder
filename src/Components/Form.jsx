

import Operations from "./Operators"
import Person from "./PersonDetails"
import "../styles/left.css"

import AddExperience from "./Experience/AddExperience"
import AddEduction from "./Education/Education-header"


function Form() {

  return (
    <> 
    <div className="Form">
       <Operations />
       <Person />
       <AddEduction/>
       {/* <SaveEducation /> */}
       <AddExperience />
    </div>
    </>
  )
}

export default Form
