/* eslint-disable react/prop-types */
import "../styles/inputfield.css";


function InputField({ label, placeholder, type , value , onChange}) {
  return (
    <>
     <div className="input-field-container">
         <label>{label}</label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        
      )}
     </div>
    </>
  );
}

export default InputField;
