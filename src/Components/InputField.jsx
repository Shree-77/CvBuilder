/* eslint-disable react/prop-types */
import "../styles/inputfield.css";


function InputField({ label, placeholder, type }) {
  return (
    <>
     <div className="input-field-container">
         <label>{label}</label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
     </div>
    </>
  );
}

export default InputField;
