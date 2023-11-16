/* eslint-disable react/prop-types */

function PersonalInfoSection({name,email,phone,address}) {
    
    return (
        <>

            <div className="nameInfo">
                <h2>{name}</h2>
            </div>
            <div className="contact">
                <div>
                    <i className="fas fa-envelope" style={{fontSize:'20px'}}></i>
                    <span>{email}</span>
                </div>
                <div>
                    <i className="fas fa-phone"></i>
                    <span>{phone}</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{address}</span>
                </div>
            </div>
        </>
    );
}

export default PersonalInfoSection;
