import React, { useContext } from 'react'
import {Con} from './App';

function Home() {
  const value = useContext(Con);
  return (
    <div>
      <h1>Welcome to React Tutorials</h1>
      <p>{value}</p>
    </div>
  )
}

export default Home