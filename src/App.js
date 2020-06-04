import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'
import Hover from './HoverCounter'
import HoverCounter from './HoverCounter';
import ChildComponent from './ChildComponent'
import { Headers } from '././todoistApp/components/Headers.js'
import Content from '././todoistApp/components/layouts/Content.js'
const PrintName = (name) => {
  alert("Hi" + name)
}

function App() {
  return (
    <div className="App">
      {/* <ClickCounter name="Aadesh" />
      <HoverCounter />
      <ChildComponent name={PrintName} /> */}
      <Headers />
      <Content />

    </div>
  );
}

export default App;
