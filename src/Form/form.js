import React, { useState } from 'react';

const init = [
    {
        name : "yasar",
        income : 123456,
        position : "Business Analyst",
        ageAbove18 : true
    }
]
function Form() {
    const [data, setdata] = useState(init);
    const [name, setname] = useState("");
    const [income, setincome] = useState(0);
    const [position, setposition] = useState("Selct Option...");
    const [ageAbove18,setageAbove18] = useState(false);
    const [buttonState, setbuttonState] = useState(true);
    const clearState = () => {
        setname("");
        setincome(0);
        setageAbove18("false");
        setposition("");
    }
    
    const nameChange = (e) => {
        setname(e.target.value);
        if(e.target.value === "" || checkForDisable()){
            setbuttonState(true);
        }
        else{
            setbuttonState(false);
        }
    }

    const incomeChange = (e) => {
        setincome(e.target.value);
        if(e.target.value === "0" || e.target.value === "" || checkForDisable() ){
            setbuttonState(true);
        }else{
            setbuttonState(false);
        }
        
    }

    const positionChange = (e) => {
        setposition(e.target.value);
        if(e.target.value === "Selct Option..." || checkForDisable()){
            setbuttonState(true);
        }else{
            setbuttonState(false);
        }
    }

    const ageabove18Change = (e) => {
        setageAbove18(e.target.checked);
        checkForDisable();
    }

    const checkForDisable = () =>{
        if(name === "" || income === "0" || position === "Selct Option..."){
            return true;
        }else{
            return false;
        }
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const newData = {
            name : name,
            income : income,
            position : position,
            ageAbove18 : ageAbove18 
        }
        const copiedState = [...data];
        copiedState.push(newData);
        setdata([...copiedState]);
        clearState();
        setbuttonState(true);
    }  



    return (
        <form>
            <div>
                <span>Name : </span>
                <input placeholder='Enter Name' type='text' onChange={nameChange} value={name}/>
            </div>
            <div>
                <span>Income : </span>
                <input placeholder='Enter Income' type='number' onChange={incomeChange} value={income} />
            </div>
            <div>
                <span>Position : </span>
                <select onChange={positionChange} value={position}>
                    <option value="Selct Option...">Selct Option...</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Full Stack Engineer">Full Stack Engineer</option>
                    <option value="Block Chain Developer">Block Chain Developer</option>
                    <option value="Business Analyst">Business Analyst</option>
                </select>
            </div>
            <div>
                <span>above 18 ? </span>
                <input placeholder='Enter Name' type='checkbox' onChange={ageabove18Change} value={ageAbove18}/>
            </div>
            <input type="submit" value="submit" onClick={(e) => onSubmitHandler(e)} disabled={buttonState}/>
        </form>
  )
}

export default Form