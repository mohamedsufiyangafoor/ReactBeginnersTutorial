import React, { useState, useEffect, useContext } from "react";
import { ContextFile } from "../context";

const initxy = {
  x: null,
  y: null
}

function Clock() {
  const [time, settime] = useState(Date);
  const [xy, setxy] = useState(initxy);
  const value = useContext(ContextFile);
  useEffect(() => {
    let handle = setInterval(() => {
      settime(Date());
    },1000)
  
    return () => {
      clearInterval(handle);
    }
  })
  
  useEffect(() => {
    window.addEventListener('mousemove',handleCoordinates)
    return() => {
      window.removeEventListener('mousemove',handleCoordinates)
    }
  })
  
  const handleCoordinates = (e) => {
    
    const updatedCoordinates = {
      x: e.screenX,
      y: e.screenY
    }
    setxy(updatedCoordinates);

  }

  return (
    <>
      <div className="clock">
          <h1>Use Effect Example</h1>
          <h3>{time}</h3>
          <p>{`X: ${xy.x} Y: ${xy.y}`}</p>
          <p>{value}</p>
      </div>
    </>
  );
}

export default Clock;
