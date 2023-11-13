import { useState } from "react";
import "../../styles/details.css";
import Button from "../Buttons";
import Experience from "./ExperienceDetails";



function AddExperience(){
  const[isFormVisible ,setIsFormVisible]=useState(false);

  const toggleFormVisibility=()=>{
    setIsFormVisible(!isFormVisible);
  }

    return(
        <>
        {!isFormVisible && (
          <div className="Details-Education">
          <div className="Details-title">
            <h2>Experience</h2>
           <Button classname="expand-btn"
            name= {<i className="arrow down"></i>}
            onClick={toggleFormVisibility}
            />
         </div>
         </div>
         )}
       
        {isFormVisible && <Experience onCancel={toggleFormVisibility}/>}
        </>
    )
}

export default AddExperience;