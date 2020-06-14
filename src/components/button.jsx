//jshint esversion:6
import React from 'react';

function Button(props) {
    return(
        <p className="cal-btn" onClick={()=>props.onClick(props.sign)}>{props.sign}</p>
    )
}

export default Button;
