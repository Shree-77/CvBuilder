function ExperienceInfoSection(){
    return(
        <>
        <div className="container-ExperienceInfo">
            <div className="Info-ExpHeader">
                <h3 className="section-title">Experience Details</h3>
            </div>
            <div className="Display-Experience">
                <div className="Date-Location-exp">
                   <p className="date-period"><span>Start Date</span>- <span>End Date</span></p>
                   <p className="location"><span>Location</span></p>
                </div>
                <div className="company-designation">
                    <p className="company"><span>Company Name</span></p>
                    <p className="position"><span>Position</span></p>
                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur explicabo necessitatibus nostrum reiciendis 
                    perspiciatis possimus voluptatem cupiditate sequi laboriosam 
                    sed totam aperiam magni adipisci nisi exercitationem, ratione 
                    tempore iste eos?</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExperienceInfoSection;