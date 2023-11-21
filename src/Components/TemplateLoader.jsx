/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Button from "./Buttons";
import "../styles/operations.css";

function TemplateLoader({ clearResume, sampleResume }) {
  return (
    <>
      <div className="Operations">
        <Button name="Clear Resume" classname="btn" onClick={clearResume} />
        <Button name="Sample Resume" classname="btn" onClick={sampleResume} />
      </div>
    </>
  );
}

export default TemplateLoader;
