import "./styles.css";
import React , {useState} from "react";

export default function App() {
  const[likecounter, setlikecounter]=useState(0);
  function likeclickhandler(){
    var newlikecounter= likecounter+1;
    setlikecounter(newlikecounter);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
     <button onClick={likeclickhandler}>clickme</button>
    {likecounter}</div>
  );
}
