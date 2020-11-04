import React from 'react';
import Calculator from './Calculator';
import RecentCalculations from './RecentCalculations';
import clienConnection from './Client';

let CalculatorApp = ()=>{
    const {calculations, addCalculation} = clienConnection();
    return (
       <div className="calculator-app">
           <RecentCalculations calculations={calculations}/>
           <Calculator addCalculation={addCalculation}/>
       </div>
    )
}

export default CalculatorApp;