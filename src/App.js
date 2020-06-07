import React from 'react';
import './App.css';

const App = ({name,age}) => {
  return (
   <div>
     <h1><strong>FARHAN SABIR</strong></h1>
      <p className = "text">my name is {name} and my age is {age}</p>
      <div>
        <ol>
          <h2>TODOS</h2>
          <li>breakfast</li>
          <li>learning</li>
          <li>practice</li>
          <li>sleep</li>
        </ol>
        <ul>
          <h2>fruits</h2>
          <li>mango</li>
          <li>apple</li>
          <li>banana</li>
          <li>orange</li>
        </ul>
      </div>
   </div>
  );
}

export default App;
