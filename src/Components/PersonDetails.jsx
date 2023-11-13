import InputField from "./InputField";
import "../styles/details.css";

function Person(){
    return (
        <>
       <div className="Details-Person">
         <h2>Personal Details</h2>
        <InputField label="Full name" placeholder="Shree" type="text"/>
        <InputField label="Email" placeholder="shreeviswa7@gmail.com" type="text"/>
        <InputField label="Phone number" placeholder="+91 79048137" type="text"/>
        <InputField label="Address" placeholder="Chennai,India" type="text"/>
        
       </div>
        </>
    )
}

export default Person;