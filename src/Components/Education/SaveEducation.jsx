/* eslint-disable react/prop-types */
import Button from "../Buttons";

import "../../styles/edu.css";
import "../../styles/buttons.css"


function SaveEducation({toggleFormVisibility}){
    return(
        <>
        <div className="Details-Education">
            <div className="Details-title">
            <h2>Education</h2>
           <Button classname="expand-btn"
            name= {<i className="arrow up"></i>}
            onClick={toggleFormVisibility}
            />
         </div>
            <h3 className="uni-name">UniversityName</h3>
            <Button name="+ Education" classname="btn"/>
        </div>
        </>
    )
}

export default SaveEducation;