/* eslint-disable react/prop-types */
import "../styles/buttons.css"

function Button({classname,name , onClick}){

    return(
        <>
        <button className={classname} onClick={onClick}>{name}</button>
        </>
    )

}

export default Button;