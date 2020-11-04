import React, {useState} from 'react';


const Calculator = (props)=>{
    const [equation, setEquation] = useState('');
        
    let onButtonClick=(e)=>{
        let operators = ['+','-','*','/','%'];
        let input = e.target.value;
        if(input==='clear'){
            setEquation('');
        }else if(input ==='back'){
            if(equation.length>=1){
                let newEquation = equation.slice(0,-1);
                setEquation(newEquation);
            }
        }else if(operators.includes(input)){
            let newEquation = `${equation} ${input} `;
            setEquation(newEquation);
        }else if(input ==='='){
            try{
                // disabling no-eval rule because use of eval here seems safe
                // eslint-disable-next-line no-eval
                let  result = eval(equation);
            if(!isNaN(result)){
                let formatted = +(Math.round(result + "e+2")  + "e-2");
                let newEquation = `${equation} = ${formatted}` ;
                props.addCalculation(newEquation);
                setEquation('');
            }}catch(error){
                alert('Invalid operation!');
            }
        }else{
            let newEquation = `${equation}${input}`
            setEquation(newEquation);
        }
    }
    return(
        <div className="calculator">
           <div className="calculator__screen">
                <div className="calculator__input">{equation}</div>
           </div>
           <div className="calculator__keypad">
               <div className="keypad__row">
                   <button className="keypad__symbol" value='clear' onClick={onButtonClick}>c</button>
                   <button className="keypad__symbol" value ='back' onClick={onButtonClick}>&larr;</button>
                   <button className="keypad__symbol" value ='%' onClick={onButtonClick}>%</button>
                   <button className="keypad__symbol" value ='/' onClick={onButtonClick}>÷</button>
               </div>
               <div className="keypad__row">
                    <button className="keypad__button" value ='7'onClick={onButtonClick}>7</button>
                    <button className="keypad__button" value ='8' onClick={onButtonClick}>8</button>
                    <button className="keypad__button" value ='9' onClick={onButtonClick}>9</button>
                    <button className="keypad__symbol" value ='*' onClick={onButtonClick}>x</button>
               </div>
               <div className="keypad__row">
                    <button className="keypad__button" value ='4' onClick={onButtonClick}>4</button>
                    <button className="keypad__button" value ='5' onClick={onButtonClick}>5</button>
                    <button className="keypad__button" value ='6' onClick={onButtonClick}>6</button>
                    <button className="keypad__symbol" value ='-' onClick={onButtonClick}>-</button>
               </div>
               <div className="keypad__row">
                    <button className="keypad__button" value ='1' onClick={onButtonClick}>1</button>
                    <button className="keypad__button" value ='2' onClick={onButtonClick}>2</button>
                    <button className="keypad__button" value ='3' onClick={onButtonClick}>3</button>
                    <button className="keypad__symbol" value ='+' onClick={onButtonClick}>+</button>
               </div>
               <div className="keypad__row">
                    <button className="keypad__button" value ='' onClick={onButtonClick}></button>
                    <button className="keypad__button" value ='0' onClick={onButtonClick}>0</button>
                    <button className="keypad__button" value ='.' onClick={onButtonClick}>.</button>
                    <button className="keypad__symbol" value ='=' onClick={onButtonClick}>=</button>
               </div>
           </div>
        </div>
    )
}

export default Calculator;