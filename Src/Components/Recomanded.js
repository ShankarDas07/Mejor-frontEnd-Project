import { useState } from "react";
import { addItems,incrementItems,decrementItems } from "../Stored/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Recomanded({items}){

    // const [count,setCount] = useState(0); // local state variable differend route a gala value loose kora dey 
                        // and 1 ti item jodi 1bar recomanded r vetor & r 1var veg r vetor thaka tha hola to 2to different dhaka66a 1ta add korla 2 tay add ho66a na ti ay use state taka ay khan thaka sorata hoba 
    
    const Restudata = useSelector(state=> state.cartSlice.itemsObj);// store থেকে data নিচ্ছে. store change হলে detect করছে. Redux Store এর ভিতরে subscribe system আছে. Redux store এ একটা method থাকে:store.subscribe(listener)--> এর মানে: "Store change হলে এই function run করো" //cartSlice thaka data as6a ti same item a 2bar add option show hoba na
    const element = Restudata.find(Restu=> Restu.id===items.id);
    const count = element ? element.quantity:0;

    const dispatch = useDispatch();

    function handleAddItems(){
        // setCount(count+1); // useSelector & tar por aro 2line code r jonna ata dor kar nii 
        dispatch(addItems(items)) // User যখন "Add Item" button এ click করে.  dispatch() এর মাধ্যমে Redux Store এ action পাঠানো হয়.  items data action.payload হিসেবে slice r reducer এ যায়. reducer state update করে (নতুন item add হয়)
    }                               // তাই: actions.payload == items same i jinis
    function handleIncrementItems(){
        // setCount(count+1);
        dispatch(incrementItems(items)); // তুমি component এ dispatch ho66a slice r action a ja66a/    // dispatch() incrementItems action call করে. items object action.payload হিসেবে reducer এ যায়. reducer store এ সেই item এর quantity বাড়ায়
    }
    function handleDecrementItems(){
        // setCount(count-1);
        dispatch(decrementItems(items)) // Dispatch হলে Redux Store reducer call করে
    }

    return(
            // border-b → শুধু নিচে একটা line দেয়। মানে প্রতিটা food item এর নিচে একটা divider line থাকবে। border দিলে চারদিকে line হতো, border-b শুধু bottom এ। 
        <div className="flex w-full justify-between mt-5 items-start border-b border-gray-200 pb-8">

            <div className="w-[75%] pr-4">
                <p className="font-bold text-gray-800 text-sm md:text-base">{items?.name}</p>
                                                    {/* jodi items r moddha defaultPrice thaka to--> ⭣              nahola ⭣ */}
                <p className="font-bold text-gray-700 mt-1">{"₹ " + ("defaultPrice" in items ? items?.defaultPrice/100: items?.price/100 )}</p>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-green-500 text-sm">{"★ " + items?.ratings?.aggregatedRating?.rating}</span>
                    <span className="text-gray-500 text-sm">{" (" + items?.ratings?.aggregatedRating?.ratingCountV2 + ")"}</span>
                </div>
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">{items?.description}</p>
            </div>

            <div className="w-[100px] sm:w-[120px] md:w-[130px] relative flex-shrink-0">
                <img className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + items?.imageId}/>
                {
                    count === 0 ?(
                                    <button className="w-[70%] h-9 absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 px-4 py-2 font-bold border border-gray-300 rounded-xl text-sm shadow-lg hover:bg-green-150 cursor-pointer transition-colors duration-200" onClick={() => handleAddItems()}>ADD </button>
                                ): (
                                        <div className="w-[70%] h-9 absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-xl  shadow-lg">
                                            <button className="text-green-700 font-bold  px-2.5 hover:bg-gray-200 rounded"onClick={() => handleDecrementItems()}>-</button>
                                            <span className="font-bold text-gray-900 ">{count}</span>
                                            <button className="text-green-700 font-bold  px-2.5 hover:bg-gray-200 rounded" onClick={() => handleIncrementItems()}>+</button>
                                        </div>
                                    )
                }
            </div>

        </div>
    )
}

            // VVI puro { store & slice & recomanded } file r work flow

    // {                         User Click
    //                              ↓
    //                              ↓
    //                              ↓
    //                 User যখন button / icon / UI element এ click করে,
    //                 তখন React component এর একটি event handler function (যেমন handleAddItems)
    //                 execute হয়।
    //                 এই function এর ভিতরে dispatch() call করা হয়।
    //                              ↓
    //                              ↓
    //                              ↓
    //                 dispatch() call হয় (Component থেকে Redux Store এ action পাঠানো হয়)
    //                 dispatch() হলো react-redux এর একটি function।
    //                 এটা component থেকে একটি action object Redux Store এ পাঠায়।
    //                 এই action object এর ভিতরে থাকে:
    //                 1️⃣ type → কোন reducer run হবে সেটা বোঝায়  
    //                 2️⃣ payload → reducer এ যাওয়া data (যেমন items)

    //                 উদাহরণ:
    //                 dispatch(addItems(items))

    //                 এখানে items → action.payload হয়ে যায়।
    //                              ↓
    //                              ↓
    //                              ↓
    //                 Slice এর action trigger হয়
    //                 Redux Toolkit এ createSlice() ব্যবহার করলে
    //                 আমরা reducer function লিখি এবং তার সাথে action automatically তৈরি হয়।

    //                 যখন dispatch(addItems(items)) call হয়,
    //                 তখন slice এর addItems action trigger হয়।

    //                 মানে Redux বুঝে যায় যে এখন
    //                 slice এর addItems reducer function run করতে হবে।
    //                              ↓
    //                              ↓
    //                              ↓
    //                 Reducer function run হয়
    //                 Reducer হলো একটি pure function যা current state নিয়ে
    //                 নতুন state তৈরি করে।

    //                 Slice এর reducer এর ভিতরে যেসব function আছে
    //                 (যেমন addItems, incrementItems, decrementItems)
    //                 সেগুলোর মধ্যে নির্দিষ্ট function run হয়।

    //                 উদাহরণ:

    //                 addItems:(state,action)=>{
    //                 state.itemsObj.push({...action.payload, quantity:1});
    //                 state.count++;
    //                 }

    //                 এখানে action.payload = items

    //                 Redux Toolkit এ Immer use হয়,
    //                 তাই আমরা state সরাসরি modify করতে পারি।
    //                              ↓
    //                              ↓
    //                              ↓
    //                 Redux Store এর state update হয়
    //                 Reducer run হওয়ার পরে
    //                 Redux Store এর ভিতরের global state update হয়ে যায়।

    //                 পুরনো state → নতুন state তৈরি হয়।

    //                 উদাহরণ:

    //                 Old State
    //                 {
    //                 itemsObj:[],
    //                 count:0
    //                 }

    //                 New State
    //                 {
    //                 itemsObj:[
    //                 {id:10,name:"Burger",quantity:1}
    //                 ],
    //                 count:1
    //                 }

    //                 এই নতুন state পুরো application এ available থাকে।
    //                              ↓
    //                              ↓
    //                              ↓
    //                 useSelector() এর মাধ্যমে Component নতুন state পায়
    //                 React component এর ভিতরে useSelector() hook ব্যবহার করে
    //                 Redux Store এর state read করা হয়।

    //                 উদাহরণ:

    //                 const data = useSelector((store)=>store.cart)

    //                 যখন store update হয়,
    //                 useSelector automatically নতুন state component এ দেয়।
    //                              ↓
    //                              ↓
    //                              ↓
    //                 Component আবার re-render হয়
    //                 যেহেতু component এর state data change হয়েছে,
    //                 React component আবার render হয়।

    //                 তার ফলে UI তে নতুন data show হয়।

    //                 উদাহরণ:
    //                 Cart count increase হলে UI তে number change হবে।
    // }