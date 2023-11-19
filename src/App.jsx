import "./styles/App.css";
import "./styles/resume.css";
import EducationInfoSection from "./Components/Education/EducationInfoSection";
import ExperienceInfoSection from "./Components/Experience/ExperienceInfoSection";
import exampledata from "./Exampledata";
import TemplateLoader from "./Components/TemplateLoader";
import { useEffect, useState } from "react";
import Person from "./Components/Personal/PersonDetails";
import PersonalInfoSection from "./Components/Personal/Personalnfo";
import AddEducation from "./Components/Education/Education-header";
import AddExperience from "./Components/Experience/AddExperience";

function App() {
  const [personalInfo, setPersonalInfo] = useState(()=>{
    const localValue=localStorage.getItem("PERSONALINFO")
    if (localValue===null) return []
    return JSON.parse(localValue)
  });
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);
  const [isEducationInfoVisible, setIsEducationInfoVisible] = useState(false);
  const [isExperienceInfoVisible, setIsExperienceInfoVisible] = useState(false);

useEffect(() => {
  localStorage.setItem("PERSONALINFO",JSON.stringify(personalInfo))
}, [personalInfo]);

 
  const toggleFormVisibility = (formType) => {
    if (formType === "education") {
      setIsEducationInfoVisible(!isEducationInfoVisible);
      setIsExperienceInfoVisible(false);
    } else if (formType === "experience") {
      setIsExperienceInfoVisible(!isExperienceInfoVisible);
      setIsEducationInfoVisible(false);
    }
  };

  function handlePersonalInfo(fieldName, value) {
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  }

  function clearResume() {
    setPersonalInfo([]);
    setEducationInfo([]);
    setExperienceInfo([]);
  }

  function LoadSample() {
    setPersonalInfo(exampledata.personalInfo);
    setEducationInfo(exampledata.sections.educations);
    setExperienceInfo(exampledata.sections.experiences);
  }

  return (
    <>
      <div className="AppBody">
        <div className="left-side">
          <TemplateLoader
            clearResume={clearResume}
            sampleResume={LoadSample}
          />
          <Person
            onChange={handlePersonalInfo}
            fullname={personalInfo.fullName}
            email={personalInfo.email}
            phone={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
          <AddEducation
            isFormVisible={isEducationInfoVisible}
            toggleFormVisibility={() => toggleFormVisibility("education")}
          />
          <AddExperience
            isFormVisible={isExperienceInfoVisible}
            toggleFormVisibility={() => toggleFormVisibility("experience")}
          />
        </div>

        <div className="Resume-Container">
          <div className="personal-section">
            <PersonalInfoSection personaldetails={personalInfo} />
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
