import { useState, useEffect } from "react";
const init = [
  {
    name: "Kualalampur srinivasan",
    followers: "100",
    blog: "srinivasan@google.com",
  },
  {
    name: "Kualalampur srinivasan",
    followers: "90",
    blog: "srinivasan@google.com",
  },
];
function useFetch(url) {
  const [data, setdata] = useState(init);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    if(url !== null){
        setloading(true);
        getData(url);
        
    }
  }, [url])
  
  const getData = async (url) => {
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        const newdata = [
          {
            name: jsonResponse.name,
            followers: jsonResponse.followers,
            blog: jsonResponse.blog,
          },
        ];
        setdata(newdata);
        setloading(false);
      } catch (e) {
        seterror(e.message);
        console.log("hart" + e.message);
        setloading(false);
      } finally {
        console.log("task is completed at finally block");
      }
    
  };

  return [data,loading,error];
    
}

export default useFetch;
