import React,{Fragment,useState} from 'react';
import "../App.scss";

const nameStyle ={
    color: "blue",
    border : "1px solid grey",
    paddingTop: "5px",
    paddingBottom: "5px",
    width: "300px"
}

const list = [
  { firstName:"Noorul" , lastName:"Asma"},
  { firstName:"Sanofar" , lastName:"Marziha"}
]
function Styleinfo(props) {
  // eslint-disable-next-line no-unused-vars
  const [name, setname] = useState(list);
  
  return (
    <Fragment>
      <>
        <h1>state list</h1>
        {name.map((cur,ind) => {
          return(
            <div key= {"ir" + ind}>
              <h4>first Name : {cur.firstName}</h4> 
              <h4>last Name : {cur.lastName}</h4>
            </div>
          )}
        )}
      </>

      <>
          <h1>styleinfo</h1>
          <h3 style={{color : "green",border: "1px solid black"}}>Abu</h3>
          <h3 style={nameStyle}>yasar</h3>
          <h3 className="list">{props.name}</h3>
          <p>{props.children}</p>
      </>
    </Fragment>
  )
}

export default Styleinfo