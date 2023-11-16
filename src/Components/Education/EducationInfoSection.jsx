
import exampledata from "../../Exampledata";

function EducationInfoSection() {
    return (
        <>
            <div className="container-EducationInfo">
                <div className="Info-EduHeader">
                    <h3 className="section-title">Education Details</h3>
                </div>
                <div className="Display-Education">
                    {exampledata.sections.educations.map((education) => (
                        <div key={education.id} className="Education-Entry">
                            <div className="Date-Location">
                                <p className="date-period">{education.startDate} -  {education.endDate}</p>
                                <p className="location"><span>Location:</span> {education.location}</p>
                            </div>
                            <div className="Uni-dept">
                                <p className="University"><span>University Name:</span> {education.schoolName}</p>
                                <p className="Department"><span>Degree:</span> {education.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EducationInfoSection;
