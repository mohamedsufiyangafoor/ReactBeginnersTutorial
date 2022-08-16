import React, { useState } from 'react'

export const AgeComponent = () => {
    const [Age, setAge] = useState(0);
    const [highAge,setHighAge] = useState(false);


    const ageHandler = (e,lion) => {
        e.preventDefault()
        let val = e.target.value;
        if(val <= 100 && val > 0){    
            setAge(val);
            setHighAge(false);
        }
        else{
            setHighAge(true);
        }
    }
    return (
    <>
        <h1>Age Calculator</h1>
        <input placeholder="Enter your Age" type="number" onChange={(e) => ageHandler(e,"sufiyan")}/>

        {(Age === 0 ) ? <></> : (highAge) ? <>Enter Correct Age</> : <>Age is : {Age}</>}
    </>
  )
}



// Hook rules
// Don't call inside loops
// Don't call inside conditions
// Don't call inside nested function
// always use hooks at the top of the function
// only call hooks from react functions


// internal working of useState
// simple example using useState and it has lot more than this
// function useState(init){
//     let _val = init;
    
//     return [
//     _val,
//     (newVal)=>
//     _val = newVal
//     ]
//   }
  
//   const [_val,newVal] = useState(5);
//   console.log(_val);
//   console.log(newVal(50));
// console.log(_val); but value doesnot change in _val that we getting using destructuring.


