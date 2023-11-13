import { useState } from "react";
import "../../styles/edu.css"
import Button from "../Buttons";
import Education from "./EducationDetails";



function AddEduction(){
  const[isFormVisible ,setIsFormVisible]=useState(false);

  const toggleFormVisibility=()=>{
    setIsFormVisible(!isFormVisible);
  }

    return(
        <>
        {!isFormVisible && (
          <div className="Details-Education">
          <div className="Education-title">
            <h2>Education</h2>
           <Button classname="expand-btn"
            name= {<i className="arrow down"></i>}
            onClick={toggleFormVisibility}
            />
         </div>
         </div>
         )}
       
        {isFormVisible && <Education onCancel={toggleFormVisibility}/>}
        </>
    )
}

export default AddEduction;