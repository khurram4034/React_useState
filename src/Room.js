import React, {useState} from 'react';
import './Room.css';

function Room() {
    let [light, setLight] = useState(false);
    return (
        <div className={`room ${light? 'off' : ' '}`}>
            <h3>Room light is : {light? 'ON' : 'OFF'}</h3>

            <p>
                {light? 
                <button onClick={()=>setLight(!light)}>OFF</button>  
                :
                <button onClick={()=>setLight(!light)}>ON</button> 
            }
            </p>
            
        </div>
    )
}

export default Room
