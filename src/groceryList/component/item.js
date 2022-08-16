import React from 'react'

function item({grocery,index,singleDeleteHandler,editable,editProductHandler,submitEditedName}) {
  return (
    <div className="item-style">
         {
          editable ? <input  className='transparent-input' defaultValue={grocery.name} onKeyDown={(e) => submitEditedName(e,index)}/> : <h3 onDoubleClick={editProductHandler}>{grocery.name}</h3>
        }
        
        <h3>calories : {grocery.calories}</h3>
        <h3>Quantity : {grocery.portion}</h3>
        <button className="remove-button" onClick={(e) => singleDeleteHandler(e,grocery) } name={grocery.name}>delete product</button>
    </div>
  )
}

export default item
















// <>
//         {groceryList.map((cur,ind) => {
//             return(
//                 <div className="item-style" key={"pro" + ind}>
//                     <h3>Name : {cur.name}</h3>
//                     <h3>calories : {cur.calories}</h3>
//                     <h3>Quantity : {cur.portion}</h3>
//                 </div>
//             )
//         })}
//     </>