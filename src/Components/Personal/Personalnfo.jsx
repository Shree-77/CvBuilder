/* eslint-disable react/prop-types */

function PersonalInfoSection({personaldetails}) {
    
    return (
        <>
            <div className="nameInfo">
                <h2><span>{personaldetails.fullName}</span></h2>
            </div>
            <div className="contact">
                <div>
                    
                    <span>{personaldetails.email}</span>
                </div>
                <div>
                    
                    <span>{personaldetails.phoneNumber}</span>
                </div>
                <div>
                    
                    <span>{personaldetails.address}</span>
                </div>
            </div>
        </>
    );
}

export default PersonalInfoSection;
