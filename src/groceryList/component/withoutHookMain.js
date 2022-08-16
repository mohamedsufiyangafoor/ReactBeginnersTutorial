import React, { useState } from "react";
import Item from './item'
import './item.css'

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
  const [groceryList, setgroceryList] = useState(initialGroceryList);
  const [addProduct, setaddProduct] = useState(false);
  const [product, setproduct] = useState("");
  const [calorie, setcalorie] = useState(0);
  const [portion, setportion] = useState("");
  const [editable, seteditable] = useState(false);

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
    const copiedState = [...groceryList];
    const editedProduct = {
      name: product,
      calories : calorie,
      portion : portion
    }
    copiedState.push(editedProduct);
    setgroceryList(copiedState);
    setaddProduct(false);
    console.log(copiedState);
  }
//#endregion
  const highCalorieHandler = (e) => {
    e.preventDefault();
    const lowCalorieList = groceryList.filter((cur) => cur.calories <= 100);
    setgroceryList(lowCalorieList);
  }

  const singleDeleteHandler = (e,cur) => {
    e.preventDefault();
    const deletedArray = groceryList.filter((item) => item.name !== cur.name );
    setgroceryList(deletedArray);
  }
  
  const editProductHandler = (e) => {
    e.preventDefault();
    seteditable(true);
  }
  
  const submitEditedName = (e,index) => {
    if(e.keyCode === 13){
       const copiedState = [...groceryList];
       copiedState[index].name = e.target.value;
       setgroceryList([...copiedState]);
    }
  }


  return (
    <>
      <h1>Groccery List</h1>
      
      {
        groceryList.map((cur,ind) => {
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