/* eslint-disable react/prop-types */

import "../../styles/details.css";
import Button from "../Buttons";
import SaveExperience from "./SaveExperience";



function AddExperience({toggleFormVisibility , isFormVisible}){
  
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
       
        {isFormVisible && <SaveExperience toggleFormVisibility={toggleFormVisibility}/>}
        </>
    )
}

export default AddExperience;