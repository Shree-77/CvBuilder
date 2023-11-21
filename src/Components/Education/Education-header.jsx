/* eslint-disable react/prop-types */
import "../../styles/form.css"
import "../../styles/details.css";
import Button from "../Buttons";
import SaveEducation from "./SaveEducation";

function AddEduction({isFormVisible , toggleFormVisibility , handleFormSubmit,educationData,handleInputChange}){
  
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
       
        {isFormVisible && <SaveEducation toggleFormVisibility={toggleFormVisibility} handleFormSubmit={handleFormSubmit} educationData={educationData} handleInputChange={handleInputChange} />}
        </>
    )
}

export default AddEduction;