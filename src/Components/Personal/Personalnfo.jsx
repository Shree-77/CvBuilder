/* eslint-disable react/prop-types */

function PersonalInfoSection({personaldetails}) {
    
    return (
        <>
            <div className="nameInfo">
                <h2><span>{personaldetails.fullName}</span></h2>
            </div>
            <div className="contact">
                <div>
                    <i className="fas fa-envelope" style={{fontSize:'20px'}}></i>
                    <span>{personaldetails.email}</span>
                </div>
                <div>
                    <i className="fas fa-phone"></i>
                    <span>{personaldetails.phoneNumber}</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{personaldetails.address}</span>
                </div>
            </div>
        </>
    );
}

export default PersonalInfoSection;
