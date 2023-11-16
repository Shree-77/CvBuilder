
import Person from "./Personal/PersonDetails"
import AddExperience from "./Experience/AddExperience"
import AddEduction from "./Education/Education-header"


function Form() {

  return (
    <> 
    <div className="Form">

       <Person />
       <AddEduction/>
       <AddExperience />
    </div>
    </>
  )
}

export default Form
