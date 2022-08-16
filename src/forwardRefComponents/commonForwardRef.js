import React, { useEffect, useRef } from "react";
import Input from "./Input";

function CommonForwardRef() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const keyPressHandle = (e,name) => {
    if(name === "first"){
        if(e.keyCode === 40){
            lastNameRef.current.focus();
        }
    }else if(name === "last"){
        if(e.keyCode === 38){
            firstNameRef.current.focus();
        }

    }
    
  }
  return (
    <div>
      <Input placeholder="enter first name" ref={firstNameRef} keyPressHandle={keyPressHandle} name="first" />
      <Input placeholder="enter last name" ref={lastNameRef} keyPressHandle={keyPressHandle} name="last"/>
    </div>
  );
}

export default CommonForwardRef;
