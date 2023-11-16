import exampledata from "../../Exampledata";

function ExperienceInfoSection(){
    return(
        <>
        <div className="container-ExperienceInfo">
            <div className="Info-ExpHeader">
                <h3 className="section-title">Experience Details</h3>
            </div>
            <div className="Display-Experience">
                {exampledata.sections.experiences.map((experience)=>
                    <div key={experience.id} className="Experience-Entry">
                        <div className="Data-Location-exp">
                            <p className="date-period"><span>{experience.startDate}</span>-<span>{experience.endDate}</span></p>
                            <p className="location"><span>{experience.location}</span></p>
                        </div>
                        <div className="company-designation">
                            <p className="company"><span>{experience.companyName}</span></p>
                            <p className="position"><span>{experience.positionTitle}</span></p>
                            <p className="description">{experience.description}</p>
                            </div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default ExperienceInfoSection;