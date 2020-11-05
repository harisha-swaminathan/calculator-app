import {useEffect, useState, useRef} from 'react';
import io from 'socket.io-client';
import uuid from 'react-uuid';

const ClientConnection = ()=>{
    const [calculations, setCalculations] = useState([]);
    const socketRef = useRef();

    useEffect(()=>{
        if(!localStorage.calculations){
            localStorage.setItem('calculations', JSON.stringify([]));
        }
        else{
            let parsedData = JSON.parse(localStorage.getItem('calculations'));
            setCalculations(parsedData);
        }

        //socketRef.current = io('https://calculator-socketio.herokuapp.com/');

        socketRef.current = io(`http://localhost:${process.env.PORT||5000}/`);

        socketRef.current.on('newCalculation',(newCalc)=>{
            setCalculations((calculations)=>{
                if(calculations.length>=10){
                    calculations.pop();
                }
                localStorage.setItem('calculations',JSON.stringify([newCalc,...calculations]));
                return [newCalc,...calculations]
            });
            
        });
    },[]);

    const addCalculation =  (calculation) => {
        let calculationWithId = {equation: calculation, id:uuid()};
        socketRef.current.emit("newCalculation",  calculationWithId);
    };

    return {calculations,addCalculation };

}

export default ClientConnection;


