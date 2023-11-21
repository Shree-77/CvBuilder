/* eslint-disable react/prop-types */
import InputField from "../InputField";
import "../../styles/details.css";


function Person({ fullname, email, phone, address,onChange }) {
  return (
    <>
      <form className="Details-Person">
        <h2>Personal Details</h2>
        <InputField
          label="Full name"
          placeholder="Shree"
          type="text"
          value={fullname}
          onChange={(e) => onChange("fullName", e.target.value)}
          name="fullName"
        />
        <InputField
          label="Email"
          placeholder="shreeviswa7@gmail.com"
          type="text"
          value={email}
          onChange={(e) => onChange("email", e.target.value)}
          name="email"
        />
        <InputField
          label="Phone number"
          placeholder="+91 79048137"
          type="text"
          value={phone}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
          name="phoneNumber"
        />
        <InputField
          label="Address"
          placeholder="Chennai,India"
          type="text"
          value={address}
          onChange={(e) => onChange("address", e.target.value)}
          name="address"
        />
      </form>
    </>
  );
}

export default Person;
