import { useState } from "react";
// Custom Hook
function useList(init){
    const [list, setlist] = useState(init);

    return{
        list,
        removeItem(i){
            const deletedArray = list.filter((item) => item.name !== i.name );
            setlist([...deletedArray]);
        },
        saveItem(index,newVal){
            const copiedState = [...list];
            copiedState[index].name = newVal;
            setlist([...copiedState]);
        },
        addItem(editedProduct){
            const copiedState = [...list];
            copiedState.push(editedProduct);
            setlist([...copiedState]);
        },
        belowHundredCalorie(){
            const lowCalorieList = list.filter((cur) => cur.calories <= 100);
            setlist(lowCalorieList);
        }
    }
}

export default useList;