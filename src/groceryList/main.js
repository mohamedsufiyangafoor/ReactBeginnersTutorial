import React, { useState } from "react";
import useList from "../Hooks/useList";
import Item from './component/item';
import './component/item.css'
const initialGroceryList = [
  {
    name: "nombu kangi",
    calories: 323,
    portion: "1 cup",
  },
  {
    name: "rice",
    calories: 167,
    portion: "1 cup",
  },
  {
    name: "Apple",
    calories: 72,
    portion: "1",
  },
  {
    name: "Orange",
    calories: 51,
    portion: "1",
  },
];

function Entry() {
  const [addProduct, setaddProduct] = useState(false);
  const [product, setproduct] = useState("");
  const [calorie, setcalorie] = useState(0);
  const [portion, setportion] = useState("");
  const [editable, seteditable] = useState(false);
  const hookList = useList(initialGroceryList);


//#region addHandler
  const productChangeHandler = (e) => {
    e.preventDefault();
    setproduct(e.target.value);
  }

  const calorieChangeHandler = (e) => {
    e.preventDefault();
    setcalorie(e.target.value);
  }

  const portionChangeHandler = (e) => {
    e.preventDefault();
    setportion(e.target.value);
  }

  const addProductHandler = (e) => {
    e.preventDefault();
    setaddProduct(true);
  }

  const submitProductHandler = (e) => {
    e.preventDefault();
    const editedProduct = {
      name: product,
      calories : calorie,
      portion : portion
    }
    hookList.addItem(editedProduct);
    setaddProduct(false);

  }
//#endregion
  const highCalorieHandler = (e) => {
    e.preventDefault();
    hookList.belowHundredCalorie();
  }

  const singleDeleteHandler = (e,cur) => {
    e.preventDefault();
    hookList.removeItem(cur);
  }
  
  const editProductHandler = (e) => {
    e.preventDefault();
    seteditable(true);
  }
  
  const submitEditedName = (e,index) => {
    if(e.keyCode === 13){

      hookList.saveItem(index,e.target.value);
      seteditable(false);
    }
  }


  return (
    <>
      <h1>Groccery List</h1>
      
      {
        hookList.list.map((cur,ind) => {
          return(
              <Item key={"prod"+ ind} 
              grocery={cur} singleDeleteHandler={singleDeleteHandler} 
              editable={editable}
              editProductHandler={editProductHandler}
              submitEditedName={submitEditedName}
              index={ind}
              ></Item>
            
          )
        })
      }
      {
          addProduct ? 
            <>
              products :<input placeholer="Edit Product Name" onChange={(e) => productChangeHandler(e)}/>
              Calories :<input placeholer="Edit Calories" onChange={(e) => calorieChangeHandler(e)}/>
              Quantity :<input placeholer="Edit Quantity" onChange={(e) => portionChangeHandler(e)}/>
              <button className='remove-button' onClick={(e) => submitProductHandler(e)}>Submit Product</button>
            </> 
          : <button className='remove-button' onClick={(e) => addProductHandler(e)}>Add Product</button>
        }
      <button onClick={highCalorieHandler} className="remove-button">Remove</button>
    </>
  );
}

export default Entry;