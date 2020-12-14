import React, {useState} from "react";
import './App.css';
import CounterState from "./CounterState";
import Day from "./Day";
import Message from "./Message";
import Room from "./Room";

function App() {
  let [number, setNumber] = useState(1);
 
  return (
    <div className="App">
      <h1>useState for (Fetching Dat)</h1>
      <CounterState />

      <Message  counter={number} />
      <button onClick={()=>setNumber(number + 1)}>Number Updated</button>
      <Day />
      <br />
      <Room />

    </div>
  );
}

export default App;
