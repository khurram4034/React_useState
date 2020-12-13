import React, { useState} from 'react'

function CounterState() {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h3>Counter variable Initial value is : {count}</h3>
            <button onClick={()=> setCount(++count)}>Counter Update</button>

        </div>
    )
}

export default CounterState
