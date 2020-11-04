import React  from 'react';


const RecentCalculator = (props)=>{
    return(
        <div className="calculations-sidebar">
          {props.calculations.map((calculation)=>{
              return <div key ={calculation.id} className="calculations-sidebar__calculations">
                  <div className="calculations-sidebar__calculation">{calculation.equation}</div></div>
          })}
        </div>
    )
}

export default RecentCalculator;