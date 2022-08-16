import React, { useState } from "react";
import useFetch from "./useFetch";
import { Outlet } from 'react-router-dom';
// mohamedsufiyangafoor
function HooksEntryFetch() {
  const [url, seturl] = useState(null);
  const [data, loading, error] = useFetch(url);

  const getData = (e) => {
    if (e.key === "Enter") {
      seturl(`https://api.github.com/users/${e.target.value}`);
    }
  };

  return (
    <>
      <h1>HooksEntryFetch</h1>
      <span>Name : </span>
      <input onKeyDown={getData} />
      {loading && <h1>loading...</h1>}

      {!loading &&data.map((cur, ind) => (
        <h1 key={"sr" + ind}>
          <span>followers count : </span>
          {cur.followers}
        </h1>
      ))}

      {error && <h3>Error : {error}</h3>}
      <Outlet />
    </>
  );
}

export default HooksEntryFetch;
