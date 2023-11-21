/* eslint-disable react/prop-types */
import Button from "../Buttons";

function CompanyDetails({company_name}){
    return (
        <>
        <div className="company-details">
            <h3>{company_name}</h3>
            <Button name={"hide"} classname="btn" />
        </div>
        </>
    )
}

export default CompanyDetails;