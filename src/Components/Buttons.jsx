/* eslint-disable react/prop-types */
import "../styles/buttons.css"

function Button({name}){

    return(
        <>
        <button className="btn">{name}</button>
        </>
    )

}

export default Button;