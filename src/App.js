import './App.css';
import React from "./assets/react.svg"
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <h1>Language Cards</h1>
      <div className="container">
          <img className="logo" src={React} alt="react"/>
      </div>
      <Card/>
    </div>
  );
}

export default App;
