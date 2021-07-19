import { useState } from 'react';
import './App.css';
import stateData from './statedata/index.js'


function App() {
  const [selectedState, setSelectedState] = useState(null)

  const displayDropDownOptions = () => {
    // console.log(stateData)
    // let stateObjs = [];
    // for (let i=0;i<stateData.length;i++) {
    //   stateObjs.push(<option key={i} value={stateData[i]['alpha-2']}>{stateData[i]['name']}</option>)
    // }
    return stateData.map((state, i) => {
      return (<option key={i} value={state['alpha-2']}>{state['name']}</option>)
    })
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setSelectedState(e.target.value)
  }

  return (
    <div className="App">
        <h1>
          Select State from Dropdown Menu
        </h1>
      <select onChange={handleChange} name='states' id='states'>
        {displayDropDownOptions()}
      </select>
      <h1>
        {selectedState}
      </h1>
    </div>
  );
}

export default App;
