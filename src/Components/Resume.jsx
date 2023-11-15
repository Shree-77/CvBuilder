import "../styles/resume.css"
import EducationInfoSection from "./Education/EducationInfoSection";
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
        </div>
        </>
    )
}

export default Resume;