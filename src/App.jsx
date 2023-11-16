import "./styles/App.css"
import "./styles/resume.css"
import EducationInfoSection from "./Components/Education/EducationInfoSection";
import ExperienceInfoSection from "./Components/Experience/ExperienceInfoSection";
import PersonalInfoSection from "./Components/Personal/Personalnfo";
import exampledata from "./Exampledata";
import TemplateLoader from "./Components/TemplateLoader";
import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampledata.personalInfo);
  const [educationInfo, setEducationInfo] = useState(
    exampledata.sections.educations
  );
  const [experienceInfo, setExperienceInfo] = useState(
    exampledata.sections.experiences
  );

  return (
    <> 
    
      <div className="AppBody">
        <div className="left-side">
          <Form />
        <TemplateLoader
          clearResume={() => {
            setPersonalInfo({
              fullName: "",
              email: "",
              phoneNumber: "",
              address: "",
            });
            setEducationInfo([]);
            setExperienceInfo([]);
          }}
          sampleResume={() => {
            setPersonalInfo(exampledata.personalInfo);
            setEducationInfo(exampledata.sections.educations);
            setExperienceInfo(exampledata.sections.experiences);
          }}
        />
        </div>
        <div className="Resume-Container">
          <div className="personal-section">
            <PersonalInfoSection
              name={personalInfo.fullName}
              email={personalInfo.email}
              phone={personalInfo.phoneNumber}
              address={personalInfo.address}
            />
          </div>
          <div className="education-section">
            <EducationInfoSection educations={educationInfo} />
          </div>
          <div className="experience-section">
            <ExperienceInfoSection experiences={experienceInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
