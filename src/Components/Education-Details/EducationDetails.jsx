/* eslint-disable react/prop-types */
import InputField from "../InputField";
import "../../styles/details.css";
import "../../styles/edu.css"
import Button from "../Buttons";


function clickSave(){

}



function Education({onCancel}){
    return (
        <>
        <div className="Details-Education">
            <h2>Education Details</h2>
        <InputField label="School" placeholder="Enter school/university" type="text"/>
        <InputField label="Degree" placeholder="Enter Degree / Field Of Study" type="text"/>
        <InputField label="Start Date" placeholder="Enter Start Date" type="text"/>
        <InputField label="End Date" placeholder="Enter End Date" type="text"/>
        <InputField label="Location" placeholder="Enter Location" type="text"/>
        
        <div className="edu-btn">
            <Button name = "save" classname="btn" onClick={clickSave}/>
            <Button name="cancel" classname="btn" onClick={onCancel}/>
            <Button name="delete" classname="btn" onClick={onCancel}/>
        </div>
        </div>
        </>
    )
}

export default Education;