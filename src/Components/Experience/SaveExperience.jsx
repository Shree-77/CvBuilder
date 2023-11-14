/* eslint-disable react/prop-types */
import Button from "../Buttons";
import "../../styles/form.css"
import "../../styles/buttons.css"
import { useState } from "react";
import Experience from "./ExperienceDetails";


function SaveExperience({toggleFormVisibility}){
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
            <h3 className="company-name">Company Name</h3>
            <Button name="Add Experience" classname="btn" onClick={FormVisible}/>
        </div>
        )}
        {showForm && <Experience onCancel={FormVisible}/>}

        </>
    )
}

export default SaveExperience;