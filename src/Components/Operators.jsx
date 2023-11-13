import Button from "./Buttons";
import "../styles/operations.css"

function Operations(){
    return(
        <>
        <div className="Operations">
            <Button name = "Clear Resume"/>
            <Button  name = "Load Resume"/>
        </div>
        </>
    )
}

export default Operations;