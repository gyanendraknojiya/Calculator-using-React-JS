import React from 'react';

function Screen(props){
return (
    <div className="screen">
        <h1>{props.ans}</h1>
        <h2>{props.inputes}</h2>
    </div>
)
}


export default Screen;