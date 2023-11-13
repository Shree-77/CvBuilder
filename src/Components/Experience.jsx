import InputField from "./InputField";
import "../styles/details.css";

function Experience(){
    return(
        <>
        <div className="Details-Experience">
            <h2>Experience</h2>
        <InputField label="Company Name" placeholder="Enter Company Name" type="text"/>
        <InputField label="Position Title" placeholder="Enter Position Title" type="text"/>
        <InputField label="Start Date" placeholder="Enter Start Date" type="text"/>
        <InputField label="End Date" placeholder="Enter End Date" type="text"/>
        <InputField label="Location" placeholder="Enter Location" type="text"/>
        <InputField label="Description " placeholder=" Enter Description" type="textarea"/>

        </div>
        </>
    )
}

export default Experience;