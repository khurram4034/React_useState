import React,{useState} from 'react';
import './Day.css';

function Day() {
    let [isday, setDay] = useState(true);
    return (
        <div className={`box ${isday ? 'daylight' : ''}`}>
            <h3>Is the {isday? "Morning" : 'Night'} </h3>

            <button onClick={()=> setDay(!isday)}>Updated </button>
        </div>
    )
}

export default Day
