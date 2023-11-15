import "../styles/resume.css"
import EducationInfoSection from "./Education/EducationInfoSection";
import ExperienceInfoSection from "./Experience/ExperienceInfoSection";
import PersonalInfoSection from "./Personal/Personalnfo";


function Resume(){
    return (
        <>
        <div className="Resume-Container">
        <div className="personal-section">
            <PersonalInfoSection />
        </div>
        <div className="education-section">
            <EducationInfoSection />
        </div>
        <div className="experience-section">
            <ExperienceInfoSection />
        </div>
        </div>
        </>
    )
}

export default Resume;