import React, { useEffect, useRef } from "react";
import "./refForm.css";

function RefForm() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const keyPressHandle = (e, value) => {
    if (value === "name") {
      if (e.keyCode === 40 || e.keyCode === 13) {
        ageRef.current.focus();
      }
    } else if (value === "age") {
      if (e.keyCode === 40 || e.keyCode === 13) {
        marriedRef.current.focus();
      } else if (e.keyCode === 38) {
        nameRef.current.focus();
      }
    } else if (value === "married") {
      if (e.keyCode === 40 || e.keyCode === 13) {
        submitRef.current.focus();
      } else if (e.keyCode === 38) {
        ageRef.current.focus();
      }
    } else if (value === "submit") {
      if (e.keyCode === 38) {
        marriedRef.current.focus();
      }
    }
  };

  return (
    <div className="body">
      <h1>Form based on UseRef Hook</h1>
      <div className="input-field">
        <span>name: </span>
        <input
          type="text"
          ref={nameRef}
          onKeyDown={(e) => keyPressHandle(e, "name")}
        />
      </div>
      <div className="input-field">
        <span>age: </span>
        <input
          type="number"
          ref={ageRef}
          onKeyDown={(e) => keyPressHandle(e, "age")}
          min={0}
          maxLength={3}
        />
      </div>
      <div className="input-field">
        <span>married? </span>
        <input
          type="checkbox"
          ref={marriedRef}
          onKeyDown={(e) => keyPressHandle(e, "married")}
          
        />
      </div>
      <div className="input-field">
        <input
          type="submit"
          ref={submitRef}
          onKeyDown={(e) => keyPressHandle(e, "submit")}
          onClick={() => console.log("you clicked me")}
        />
      </div>
    </div>
  );
}

export default RefForm;
