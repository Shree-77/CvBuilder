/* eslint-disable react/prop-types */

import InputField from '../InputField';
import '../../styles/details.css';
import "../../styles/form.css"
import Button from '../Buttons';



function Experience({ FormVisible,  handleInputChange,handleFormSubmit, experienceData }) {


  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="Details-Experience">
          <h2>Experience</h2>
          <InputField
            label="Company Name"
            placeholder="Enter Company Name"
            type="text"
            value={experienceData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
          />
          <InputField
            label="Position Title"
            placeholder="Enter Position Title"
            type="text"
            value={experienceData.positionTitle}
            onChange={(e) => handleInputChange('positionTitle', e.target.value)}
          />
          <InputField
            label="Start Date"
            placeholder="Enter Start Date"
            type="text"
            value={experienceData.startDate}
            onChange={(e) => handleInputChange('startDate', e.target.value)}
          />
          <InputField
            label="End Date"
            placeholder="Enter End Date"
            type="text"
            value={experienceData.endDate}
            onChange={(e) => handleInputChange('endDate', e.target.value)}
          />
          <InputField
            label="Location"
            placeholder="Enter Location"
            type="text"
            value={experienceData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
          />
          <InputField
            label="Description "
            placeholder="Enter Description"
            type="textarea"
            value={experienceData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
          <div className="edu-btn">
           <Button name = "save" classname="btn" onClick={handleFormSubmit}/>
            <Button name="cancel" classname="btn" onClick={FormVisible}/>
            <Button name="delete" classname="btn" onClick={FormVisible}/>
          </div>
        </div>
      </form>
    </>
  );
}

export default Experience;
