/* eslint-disable react/prop-types */
import Button from "../Buttons";
import "../../styles/form.css"
import "../../styles/buttons.css"
import { useState } from "react";
import Experience from "./ExperienceDetails";
import CompanyDetails from "./CompanyDetails";


function SaveExperience({toggleFormVisibility, handleFormSubmit , experienceData,handleInputChange}){
    const[showForm,SetshowForm]=useState(false);

    function FormVisible(){
        SetshowForm(!showForm);
    }
    return(
        <>
        {!showForm && (<div className="Details-Education">
            <div className="Details-title">
            <h2>Experience</h2>
           <Button classname="expand-btn"
            name= {<i className="arrow up"></i>}
            onClick={toggleFormVisibility}
            />
         </div>
            <CompanyDetails company_name={experienceData.positionTitle}/>
            <Button name="Add Experience" classname="btn" onClick={FormVisible}/>
        </div>
        )}
        {showForm &&
         <Experience
          onCancel={FormVisible} 
         handleFormSubmit={handleFormSubmit}
         experienceData={experienceData}
         handleInputChange={handleInputChange}

         />}

        </>
    )
}

export default SaveExperience;