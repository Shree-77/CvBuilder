import "./styles/App.css"
import "./styles/resume.css"
import EducationInfoSection from "./Components/Education/EducationInfoSection";
import ExperienceInfoSection from "./Components/Experience/ExperienceInfoSection";
import PersonalInfoSection from "./Components/Personal/Personalnfo";
import exampledata from "./Exampledata";
import TemplateLoader from "./Components/TemplateLoader";
import { useState } from "react";
import Person from "./Components/Personal/PersonDetails";
import AddEduction from "./Components/Education/Education-header";
import AddExperience from "./Components/Experience/AddExperience";

function App() {
 const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  
  function clearResume(){
    setPersonalInfo({
              fullName: "",
              email: "",
              phoneNumber: "",
              address: "",
            });
            setEducationInfo([]);
            setExperienceInfo([]);
  }

  function LoadSample(){[
      setPersonalInfo(exampledata.personalInfo),
      setEducationInfo(exampledata.sections.educations),
      setExperienceInfo(exampledata.sections.experiences),
  ]}
  return (
    <> 
      <div className="AppBody">
        <div className="left-side">
        <TemplateLoader
          clearResume={clearResume}
          sampleResume={LoadSample}
        />
          <Person />
          <AddEduction clearResume={clearResume}/>
          <AddExperience clearResume={clearResume}/>
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
