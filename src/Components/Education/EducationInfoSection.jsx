function EducationInfoSection(){
    return(
        <>
        <div className="container-EducationInfo">
            <div className="Info-EduHeader">
                <h3 className="section-title">Education Details</h3>
            </div>
            <div className="Display-Education">
                <div className="Date-Location">
                   <p className="date-period"><span>Start Date</span>- <span>End Date</span></p>
                   <p className="location"><span>Location</span></p>
                </div>
                <div className="Uni-dept">
                    <p className="University"><span>University Name</span></p>
                    <p className="Department"><span>Department Name</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default EducationInfoSection;