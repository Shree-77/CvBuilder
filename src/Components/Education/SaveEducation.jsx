/* eslint-disable react/prop-types */
import Button from "../Buttons";

import "../../styles/form.css";
import "../../styles/buttons.css"
import { useState } from "react";
import Education from "./EducationDetails";


function SaveEducation({toggleFormVisibility}){
    const[showForm,SetshowForm]=useState(false);

    function FormVisible(){
        SetshowForm(!showForm);
    }
    return(
        <>
        {!showForm && (
            <div className="Details-Education">
            <div className="Details-title">
            <h2>Education</h2>
           <Button classname="expand-btn"
            name= {<i className="arrow up"></i>}
            onClick={toggleFormVisibility}
            />
         </div>
            <h3 className="uni-name">UniversityName</h3>
            <Button name="Add Education" classname="btn" onClick={FormVisible} />
        </div>
        )}
        {showForm && <Education FormVisible={FormVisible}/>}
        </>
    )
}

export default SaveEducation;