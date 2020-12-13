import React, {useState} from "react";
import './App.css';
import Co from "./Co";
import CounterState from "./CounterState";
import Day from "./Day";
import Message from "./Message";
import Room from "./Room";

function App() {
  let [number, setNumber] = useState(1);
  let [num, setnum] = useState(1)
 
  return (
    <div className="App">
      <h1>Using State (Hooks)</h1>
      <CounterState />

      <Message  counter={number} />
      <button onClick={()=>setNumber(number + 1)}>Number Updated</button>
      <Day />
      <br />
      <Room />
      <Co number={num} />
      <button onClick={()=>setnum(num + 1)}>Number Updated</button>
    </div>
  );
}

export default App;
