
import exampledata from "../../Exampledata";

function PersonalInfoSection() {
    const name = exampledata.personalInfo.fullName;
    const email=exampledata.personalInfo.email;
    const phone=exampledata.personalInfo.phoneNumber;
    const address =exampledata.personalInfo.address;
    return (
        <>

            <div className="nameInfo">
                <h2>{name}</h2>
            </div>
            <div className="contact">
                <div>
                    <i className="fas fa-envelope"></i>
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
