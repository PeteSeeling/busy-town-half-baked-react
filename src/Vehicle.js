export default function Vehicle(props) {
  return <div className="vehicle">
   
    {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    <span>{props.vehicle === 'car' ? '🚗' : ''}</span>
    <span>{props.vehicle === 'truck' ? '🚚' : ''}</span>
    <span>{props.vehicle === 'bus' ? '🚌' : ''}</span>
    <span>{props.vehicle === 'motorcycle' ? '🏍️' : ''}</span>
  
  </div>;
}