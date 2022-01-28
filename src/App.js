import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';
import { useState } from 'react';

function App() {
  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  const [lightColor, setLightColor] = useState(['red', 'yellow', 'green']);
  // lizardSize should be a number that starts out as 10
  const [lizardSize, setLizardSize] = useState(10);
  // alienSize should be a number that starts out as 10
  const [alienSize, setAlienSize] = useState(10);
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']
  const [vehiclesArray, setVehiclesArray] = useState(['car', 'truck', 'bus', 'motorcycle']);

  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          {/* the width of the alien should be ten times whatever the alien size is in state */}
          <img src="alien.png" width={alienSize * 10} />
          <div className="buttons">
            <button onClick={() => setLizardSize(lizardSize - 1)}>Amazing! The alien zapped the lizard!</button>
            <button onClick={() => setAlienSize(alienSize + 1)}>Oh no! The alien is gobblin up all the electricity!</button>
            
          </div>
        </div>
        <div className="monster">
          {/* the width of the lizard should be ten times whatever the alien size is in state */}
          <img src="lizard.png" width={lizardSize * 10} />
          <div className="buttons">
          
            <button onClick={() => setLizardSize(lizardSize + 1)}>Yegads! The lizard is ramping up to its final form!</button>
            <button onClick={() => setAlienSize(alienSize - 1)}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        {/* when you click this button, the color of the light in state should be set to 'red' */}
        <button onClick={() => setLightColor('red')}>Red</button>
        {/* when you click this button, the color of the light in state should be set to 'yellow' */}
        <button onClick={() => setLightColor('yellow')}>Yellow</button>
        {/* when you click this button, the color of the light in state should be set to 'green' */}
        <button onClick={() => setLightColor('green')}>Green</button>
      </div>
      {/* 
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop? 
      */}
      <VehicleList vehiclesArray={vehiclesArray}/>
      <div className='buttons' id='vehicles-array'>
        {/* This part is weird */}
        <button onClick={() => setVehiclesArray([...vehiclesArray, 'car'])}>Car</button>
        <button onClick={() => setVehiclesArray([...vehiclesArray, 'bus'])}>Bus</button>
        <button onClick={() => setVehiclesArray([...vehiclesArray, 'truck'])}>Truck</button>
        <button onClick={() => setVehiclesArray([...vehiclesArray, 'motorcycle'])}>Motorcycle</button>
       
      </div>

    </div>
  );
}

export default App;

