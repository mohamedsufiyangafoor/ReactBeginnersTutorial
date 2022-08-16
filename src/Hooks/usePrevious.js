import { useState, useRef, useEffect, useDebugValue } from "react";

function usePrevious() {
  const [age, setage] = useState(100);
  const ageRef = useRef(null);

  useEffect(() => {
    ageRef.current = age;
  })
  useDebugValue(ageRef.current > 95 ? "too high" : "too low");
  return {
    age,
    ageRef,
    Ref : ageRef.current,
    youngerHandle() {
      setage(age - 1);
    },
  };
}

export default usePrevious;
