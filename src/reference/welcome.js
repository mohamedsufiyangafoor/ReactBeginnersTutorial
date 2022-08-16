import React from 'react'
import { useParams } from 'react-router-dom'

function Welcome(props) {
    let {firstname,lastname} = useParams();
  return (
    <div>
        <h1>welcome {firstname} {lastname}</h1>
    </div>
  )
}

export default Welcome