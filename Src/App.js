import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import FoodDeliveryAvailableRestu from "./Components/FoodDeliveryAvailableRestu";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import ResturentMenu from "./Components/ResturentMenu";
import Search from "./Components/Search";
import SecondaryHome from "./Components/SecondaryHome";
import {Provider} from "react-redux";
import { Store } from "./Stored/Stores";
import CartCheckout from "./Components/CartCheckout";



function App(){
    return(
    <>
    <Provider store={Store}> {/* মানে Provider একটি prop expect করে যার নাম store।  store হলো Provider component এর prop name| আর Store হলো তোমার Redux store variable।*/}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route element={<SecondaryHome/>}>
                    <Route path="resturent" element={<FoodDeliveryAvailableRestu/>}></Route> {/* ay component r vetor thaka <Link to={"/city/Kolkata/"+RestuInfo?.info?.id}> --> id ta palam niya next line id ta bosa galo  */}
                    <Route path="/city/Kolkata/:id" element={<ResturentMenu/>}></Route>
                    <Route path="/city/Kolkata/:id/search" element={<Search></Search>}></Route> {/* React Router এখন URL check করে। যদি URL match করে-->/city/Kolkata/123/search| তাহলে React Router বুঝে:|  :id = 123 এবং তখন render করে--> <Search/> */}
                    <Route path="/CartCheckout" element={<CartCheckout/>}></Route>
                </Route>
                
            </Routes>
        </BrowserRouter>
    </Provider>
    </>
    )
}

ReactDOM.createRoot(document.getElementById("main")).render(<App/>);