/* eslint-disable react/prop-types */


function EducationInfoSection({educations}) {
    return (
        <>
            <div className="container-EducationInfo">
                <div className="Info-EduHeader">
                    <h3 className="section-title">Education Details</h3>
                </div>
                <div className="Display-Education">
                    {educations.map((education) => (
                        <div key={education.id} className="Education-Entry">
                            <div className="Date-Location">
                                <p className="date-period">{education.startDate} -  {education.endDate}</p>
                                <p className="location"> {education.location}</p>
                            </div>
                            <div className="Uni-dept">
                                <p className="University">{education.schoolName}</p>
                                <p className="Department"> {education.degree}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EducationInfoSection;
