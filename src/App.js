import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'
import Hover from './HoverCounter'
import HoverCounter from './HoverCounter';
import ChildComponent from './ChildComponent'
const PrintName = (name) => {
  alert("Hi" + name)
}

function App() {
  return (
    <div className="App">
      <ClickCounter name="Aadesh" />
      <HoverCounter />
      <ChildComponent name={PrintName} />
    </div>
  );
}

export default App;
