import React from "react";
import usePrevious from "./usePrevious";
import { Outlet } from 'react-router-dom';

function HooksEntry() {
  const home = usePrevious();
  
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h2>usePrevious</h2>
      <h4 ref={home.ageRef}>Current Age : {home.age}</h4>
      <h4>Previous Age : {home.Ref}</h4>
      <button onClick={home.youngerHandle}>make me younger</button>
      <Outlet />
    </div>

  );
}
const correctRef = React.forwardRef(HooksEntry);
export default correctRef;
