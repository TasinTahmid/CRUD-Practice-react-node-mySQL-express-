import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const displayInfo = () => {
    console.log(name, age, country, position, wage);
  }

  return (
    <div className="App">
      <h1>Please give your information...</h1>

      <div className="information">
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} />
        <label htmlFor="age">Age:</label>
        <input type="number" onChange={(e)=>{setAge(e.target.value)}}/>
        <label htmlFor="courntry">Country:</label>
        <input type="text" onChange={(e)=>{setCountry(e.target.value)}}/>
        <label htmlFor="position">Position:</label>
        <input type="text" onChange={(e)=>{setPosition(e.target.value)}}/>
        <label htmlFor="wage">Wage (per year):</label>
        <input type="text" onChange={(e)=>{setWage(e.target.value)}}/>
        <button onClick = {displayInfo}>Add Employee</button>
      </div>

    </div>
  );
}

export default App;
