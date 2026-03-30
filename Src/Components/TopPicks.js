
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addItems, incrementItems, decrementItems } from "../Stored/CartSlice";

export default function TopPicks({ items }) {

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const itemsObj = useSelector(state => state.cartSlice.itemsObj);

    const price = items?.price || items?.defaultPrice
        ? ((items.price || items.defaultPrice) / 100).toFixed(0)
        : null;

    function handleAddItems(){
        const exists = itemsObj.find(item => item.id === items.id);
        if(exists){
            dispatch(incrementItems(items));
        } else {
            dispatch(addItems(items));
        }
        setCount(count + 1);
    }

    function handleIncrementItems(){
        dispatch(incrementItems(items));
        setCount(count + 1);
    }

    function handleDecrementItems(){
        dispatch(decrementItems(items));
        setCount(count - 1);
    }

    return (
        <div className="min-w-55 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="h-[150px] w-full overflow-hidden">
                <img className="w-full h-full object-cover hover:scale-105 transition duration-300"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + items?.imageId} alt={items?.name}
                />
            </div>
            <div className="p-3 flex flex-col justify-between flex-1">
                <p className="font-semibold text-gray-800 text-sm h-[40px] line-clamp-2">
                    {items?.name}
                </p>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700 font-medium">₹{price}</span>
                    {
                        count === 0?(
                                        <button className="w-24 h-9 py-1 rounded-lg text-sm font-semibold bg-green-100 text-green-700 text-center" onClick={() => handleAddItems()}>
                                            Add
                                        </button>
                                    ):(
                                        <div className="w-24 h-9 flex items-center justify-between px-2 py-1 bg-white border border-gray-300 rounded-lg shadow">
                                            <button className="text-green-700 font-bold px-2 hover:bg-gray-200 rounded" onClick={() => handleDecrementItems()}>-</button>
                                            <span className="font-bold text-gray-900">{count}</span>
                                            <button className="text-green-700 font-bold px-2 hover:bg-gray-200 rounded" onClick={() => handleIncrementItems()}>+</button>
                                        </div>
                                    )
                    }
                </div>
            </div>
        </div>
    );
}