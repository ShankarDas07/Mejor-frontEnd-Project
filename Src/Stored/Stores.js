import{configureStore} from "@reduxjs/toolkit";
import cardReader from "./CartSlice";

export const Store = configureStore({
    reducer:{
        cartSlice:cardReader, //cartSlice → reducer function মানে store জানে: "cartSlice state update হলে এই reducer run করতে হবে".  এটা Redux store এর configuration
    }
})


                                // পুরো Redux Toolkit Flow Diagram
            // User Click ADD
            //       │
            //       ▼
            // dispatch(addItems(items))
            //       │
            //       ▼
            // Redux Toolkit Action create
            // {
            //  type:"cartSlice/addItems",
            //  payload:items
            // }
            //       │
            //       ▼
            // Reducer run
            // addItems(state,action)
            //       │
            //       ▼
            // Immer create new state
            //       │
            //       ▼
            // Redux Store update
            //       │
            //       ▼
            // React Redux notify components
            //       │
            //       ▼
            // useSelector trigger re-render