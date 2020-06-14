import React from 'react';


function Operator(props){
    return (
        <p className='operators-btn' onClick={()=>props.onClick(props.sign)} style={{height: (props.sign === '+'? '88px':'30px'),width: (props.sign === '='? '88px':'30px')} }>{props.sign}</p>
    )
}


export default Operator;