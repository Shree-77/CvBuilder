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
  const loadFromLocalStorage = (key) => {
    const localValue = localStorage.getItem(key);
    return localValue === null ? [] : JSON.parse(localValue);
  };

  const [personalInfo, setPersonalInfo] = useState(() => loadFromLocalStorage("PERSONALINFO"));
  const [educationInfo, setEducationInfo] = useState(() => loadFromLocalStorage("EDUCATIONINFO"));
  const [experienceInfo, setExperienceInfo] = useState(() => loadFromLocalStorage("EXPERIENCEINFO"));
  const [isEducationInfoVisible, setIsEducationInfoVisible] = useState(false);
  const [isExperienceInfoVisible, setIsExperienceInfoVisible] = useState(false);

  const [educationData, setEducationData] = useState({
    degree: '',
    schoolName: '',
    location: '',
    startDate: '',
    endDate: '',
  });

  const [experienceData, setExperienceData] = useState({
    companyName: '',
    positionTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    localStorage.setItem("PERSONALINFO", JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem("EDUCATIONINFO", JSON.stringify(educationInfo));
  }, [educationInfo]);

  useEffect(() => {
    localStorage.setItem("EXPERIENCEINFO", JSON.stringify(experienceInfo));
  }, [experienceInfo]);

  const toggleFormVisibility = (formType) => {
    if (formType === "education") {
      setIsEducationInfoVisible(!isEducationInfoVisible);
      setIsExperienceInfoVisible(false);
    } else if (formType === "experience") {
      setIsExperienceInfoVisible(!isExperienceInfoVisible);
      setIsEducationInfoVisible(false);
    }
  };

 const generateUniqueId = () => {
  return crypto.randomUUID();
};

  function handlePersonalInfo(fieldName, value) {
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  }

  console.log(educationData);

   const handleInputChange = (datasetter) =>(fieldName,value)=> {
    datasetter((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

 const onSubmitExperience = (e) => {
    e.preventDefault();
    const newExperience = { id: generateUniqueId(), ...experienceData };
    setExperienceInfo((prevInfo) => [...prevInfo, newExperience]);
    setExperienceData({
      companyName: '',
      positionTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  };

 const onSubmitEducation=(e)=>{
   e.preventDefault();
    const newEducation = { id: generateUniqueId(), ...educationData };
    setEducationInfo((prevInfo) => [...prevInfo, newEducation]);
    setEducationData({
      schoolName: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
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
            handleFormSubmit={onSubmitEducation}
            educationData={educationData}
            handleInputChange={handleInputChange(setEducationData)}

          />
          <AddExperience
            isFormVisible={isExperienceInfoVisible}
            toggleFormVisibility={() => toggleFormVisibility("experience")}
            handleFormSubmit={onSubmitExperience}
            experienceData={experienceData}
            handleInputChange={handleInputChange(setExperienceData)}
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


