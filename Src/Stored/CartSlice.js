import{createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name:`cartSlice`,
    initialState:{
        itemsObj:[], //items array karon amra jhokan add a click kor6i then oy cart r puro obj ta as6a ti , 2nd time onno item add korla cart abar click korla 2rokomar item asba array ta
        count:0
    },
    reducers:{
        addItems:(state,actions)=>{ // actions = dispatch করা data. তুমি Recomanded.js component এ dispatch করছো: dispatch(addItems(items)). তখন Redux internally এমন action object বানায়:--> {  type: "cartSlice/addItems",   payload: items   }  Reducer এ এই object আসে actions নামে। 
            state.itemsObj.push({...actions.payload, quantity:1}); // তাই: actions.payload == items same i jinis
            state.count++;
        },
        incrementItems:(state,actions)=>{ // same item 2bar ala increment kora daw 
            const element = state.itemsObj.find(item=> item.id===actions.payload.id); // item===actions.payload → object reference compare করে,সবসময় false দেয়। তাই element ছিল undefined। item.id===actions.payload.id দিলে ঠিকমতো match হবে! 
            element.quantity += 1; // এটা object এ নতুন property add করা। koto gulo item obj as6a tadar count 
            state.count++; // 1ti obj 2 bar ala 2 & 2nd item r 3 bar add korla 3  total count 5 
        },
        decrementItems:(state,actions)=>{ // actions না লিখলে কী হতো? যদি action না লিখো: addItems:(state)=>{.........}  তাহলে reducer payload পাবে না। মানে: items data পাবে না
            const element = state.itemsObj.find(item=> item.id===actions.payload.id);
            if(element>1){
                element.quantity -= 1;  //quantity declare না করেও কেন কাজ করছে? কারণ JavaScript object dynamic। তুমি যেকোনো property add করতে পারো। ধর payload হলো:--> {  id: 10, name: "Burger" }   push করার সময় এটা হবে:--> {  id: 10,  name: "Burger",   quantity: 1  }  মানে cart এ item এর quantity track করার জন্য।
            }
            else{
                // filter 1ti new array return kora tii amra cheek kor6i ja item 1 i jodi thaka ba 1 r kom hoy tha hola to sey item ta r new array jata create ho66a filter madhhama seta thakba na 
                state.itemsObj = state.itemsObj.filter(item=> item.id != actions.payload.id); 
            }
            state.count--;
        }
    }
})

export const {addItems,incrementItems,decrementItems} = cart.actions;
export default cart.reducer; // মানে slice থেকে reducer export করা হচ্ছে। এই reducer পরে store এ ব্যবহার করা হয়।

            // WORKFLOW

        // User click ADD
        //         │
        //         ▼
        // dispatch(addItems(items))
        //         │
        //         ▼
        // Redux action create
        // {
        //  type:"cartSlice/addItems",
        //  payload:items
        // }
        //         │
        //         ▼
        // Reducer run
        // (state,action)
        //         │
        //         ▼
        // state.itemsObj.push({...items, quantity:1})
        //         │
        //         ▼
        // Redux store update
        //         │
        //         ▼
        // useSelector detect change
        //         │
        //         ▼
        // Component re-render