import React, {useState} from 'react';
import Button from './button';
import Screen from './screen';
import Nums from './nums';
import Operator from './operator'


function App(){ 

const [Ans, setAns]= useState('0');
const [Int, setInt] = useState('')
const [cal, setCal] = useState('')

function Equalto(){
    console.log('clicked');
    var answer = eval(cal);
    setAns(answer);
}

function NumEnter(Num){
    Num !=='C'? 
    setInt(preValue=>
         (preValue + Num)) : 
         setInt('');
         Num !=='C'? 
         setCal(preValue=>
         (preValue + Num)) : 
         setCal('');
Num ==='C' && setAns('');
Num ==='C' && setCal('');
 

}
function OperatorInput(operate){
    setInt(preValue=> (preValue +" "+ operate+ " "));
    operate === 'x'? setCal(preValue=> (preValue + "*")) : operate === '%'? setCal(preValue=> (preValue + "*.01*")) : setCal(preValue=> (preValue + operate));
    
}

    return(
<div> 
<Screen ans={Ans} inputes={Int} />
        <Button onClick={OperatorInput} sign='('/>
        <Button onClick={OperatorInput} sign=')'/> 

        <div className='number-box'>
            <Nums push={NumEnter} number='9'/>
            <Nums push={NumEnter} number='8'/>
            <Nums  push={NumEnter} number='7'/>
            <Nums  push={NumEnter} number='6'/>
            <Nums push={NumEnter} number='5'/>
            <Nums  push={NumEnter} number='4'/>
            <Nums push={NumEnter} number='3'/>
            <Nums push={NumEnter} number='2'/>
            <Nums push={NumEnter} number='1'/>
            <Nums push={NumEnter} number='0'/>
            <Nums push={NumEnter} number='.'/>
            <Nums push={NumEnter} number='C'/>
        </div>
        <div className='operator-box'>
        <Operator onClick={OperatorInput}  sign="-" />
        <Operator  onClick={OperatorInput} sign="/" />
        <Operator  onClick={OperatorInput} sign="+" />
        <Operator onClick={OperatorInput}  sign="x" />
        <Operator  onClick={OperatorInput} sign="%" />
        <Operator  onClick={Equalto} sign="=" />
        </div>
</div>
    )
}


export default App;