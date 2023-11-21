/* eslint-disable react/prop-types */
import InputField from "../InputField";
import "../../styles/details.css";
import "../../styles/form.css"
import Button from "../Buttons";




function Education({FormVisible , handleFormSubmit,educationData,handleInputChange}){
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <div className="Details-Education">
            <h2>Education Details</h2>

        <InputField 
            label="School" 
            placeholder="Enter school/university" 
            type="text"
            value={educationData.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
        />
        <InputField 
            label="Degree"
            placeholder="Enter Degree / Field Of Study"
            type="text"
            value={educationData.degree}
            onChange={(e) => handleInputChange('degree', e.target.value)}
        />
        <InputField 
            label="Start Date"
            placeholder="Enter Start Date" 
            type="text"
            value={educationData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
        />
        <InputField 
            label="End Date" 
            placeholder="Enter End Date"
            type="text"
            value={educationData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
        />
        <InputField 
            label="Location"
            placeholder="Enter Location"
            type="text"
            value={educationData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
        />
        
        <div className="edu-btn">
            <Button name = "save" classname="btn" onClick={handleFormSubmit}/>
            <Button name="cancel" classname="btn" onClick={FormVisible}/>
            <Button name="delete" classname="btn" onClick={FormVisible}/>
        </div>
        </div>
        </form>
        </>
    )
}

export default Education;