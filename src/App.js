import './App.css';
import React from "./assets/react.svg"
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
          <img className="logo" src={React} alt="react"/>
          <div className="card-container">
            <h3>Languages</h3>
            <Card/>
          </div>
      </div>

    </div>
  );
}

export default App;
