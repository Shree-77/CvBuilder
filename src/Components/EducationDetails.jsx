import InputField from "./InputField";
import "../styles/details.css";

function Education(){
    return (
        <>
        <div className="Details-Education">
            <h2>Education Details</h2>
        <InputField label="School" placeholder="Enter school/university" type="text"/>
        <InputField label="Degree" placeholder="Enter Degree / Field Of Study" type="text"/>
        <InputField label="Start Date" placeholder="Enter Start Date" type="text"/>
        <InputField label="End Date" placeholder="Enter End Date" type="text"/>
        <InputField label="Location" placeholder="Enter Location" type="text"/>

        </div>
        </>
    )
}

export default Education;