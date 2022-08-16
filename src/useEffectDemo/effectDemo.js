import React,{useState,useEffect} from 'react'

function EffectDemo() {
  const [growth, setgrowth] = useState(0);

  // Mounting
  useEffect(() => {
    console.log("I am Born");
  },[])

  // Updating on specified(growth) state
  useEffect(() => {
    console.log("I am growing");
  },[growth])

  useEffect(() => {
    console.log("I am learning and growing");
  })

  const growHandle = () => {
    setgrowth(growth + 10);
  }
  return (
    <div>
      <h1>UseEffectDemo</h1>
      <h3>Growth : {growth}</h3>
      <button onClick={growHandle}>learn and grow</button>
    </div>
  )
}

export default EffectDemo