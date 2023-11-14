/* eslint-disable react/prop-types */
import InputField from "../InputField";
import "../../styles/details.css";
import Button from "../Buttons";

function clickSave(){
    
}

function Experience({onCancel}){
    
    return(
        <>
        <form action="">
            <div className="Details-Experience">
            <h2>Experience</h2>
        <InputField label="Company Name" placeholder="Enter Company Name" type="text"/>
        <InputField label="Position Title" placeholder="Enter Position Title" type="text"/>
        <InputField label="Start Date" placeholder="Enter Start Date" type="text"/>
        <InputField label="End Date" placeholder="Enter End Date" type="text"/>
        <InputField label="Location" placeholder="Enter Location" type="text"/>
        <InputField label="Description " placeholder=" Enter Description" type="textarea"/>
            <div className="edu-btn">
            <Button name = "save" classname="btn" onClick={clickSave}/>
            <Button name="cancel" classname="btn" onClick={onCancel}/>
            <Button name="delete" classname="btn" onClick={onCancel}/>
        </div>
        </div>
        </form>
        </>
    )
}

export default Experience;