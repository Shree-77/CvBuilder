import Education from "./EducationDetails"
import Experience from "./Experience"
import Operations from "./Operators"
import Person from "./PersonDetails"
import "../styles/form.css"

function Form() {

  return (
    <> 
    <div className="Form">
       <Operations />
       <Person />
       <Education />
       <Experience />
    </div>
    </>
  )
}

export default Form
