import React from 'react';


function Nums(props) {
    return (
        <p className="number-btn"  onClick={()=>props.push(props.number)}>{props.number}</p>

    )
}

export default Nums;