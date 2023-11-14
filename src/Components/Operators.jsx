import Button from "./Buttons";
import "../styles/operations.css"

function Operations(){
    return(
        <>
        <div className="Operations">
            <Button name = "Clear Resume" classname="btn" />
            <Button  name = "Load Resume"classname="btn" />
        </div>
        </>
    )
}

export default Operations;