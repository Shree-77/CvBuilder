import { useState } from "react";
import "../../styles/edu.css"
import "../../styles/details.css";
import Button from "../Buttons";
import SaveEducation from "./SaveEducation";



function AddEduction(){
  const[isFormVisible ,setIsFormVisible]=useState(false);

  const toggleFormVisibility=()=>{
    setIsFormVisible(!isFormVisible);
  }

    return(
        <>
        {!isFormVisible && (
          <div className="Details-Education">
          <div className="Details-title">
            <h2>Education</h2>
           <Button classname="expand-btn"
            name= {<i className="arrow down"></i>}
            onClick={toggleFormVisibility}
            />
         </div>
         </div>
         )}
       
        {isFormVisible && <SaveEducation toggleFormVisibility={toggleFormVisibility} />}
        </>
    )
}

export default AddEduction;