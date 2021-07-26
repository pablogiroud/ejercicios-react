import '../App.css';
import React, { useState } from 'react';

/*
//Ejercicio 1
function HelloWorld() {
  return (
    <h1>Hello world!</h1>
  );
}
export default HelloWorld;
//Ejercicio 2
function HelloWorld(props) {
  return (
    <h1>Hello {props.amigachos}!</h1>
  );
}
export default HelloWorld;
 */

//Ejercicio 3
function HelloWorld() {

  var [state, setState] = useState("");
  var estado = " from changed state";

return (
  <div>
    <h1>Hello{state}!</h1>
    <button onClick={()=> setState(state + estado)}>Click me</button>
  </div>
);
}

export default HelloWorld;