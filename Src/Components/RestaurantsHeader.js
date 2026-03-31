

import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useState } from "react";   // ← এটা যোগ করো


export default function RestaurantsHeader(){

    const counter = useSelector(state=> state.cartSlice.count);
    const [menuOpen, setMenuOpen] = useState(false);


    return(
        <div className="flex items-center justify-between px-4 md:px-10 py-4 shadow-md sticky top-0 bg-white z-10 relative">
            
            {/* Logo */}
            <div className="flex items-center gap-4 md:gap-10 md:ml-10 lg:ml-40">
                <div className="w-40 h-12  rounded-xl flex items-center justify-center">
                    <img className="w-30 h-10" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" />
                </div>
                <div className="flex items-center gap-1 cursor-pointer border-b-2 hover:text-orange-600 pb-1">
                    <span className="font-semibold">Other ▼</span>
                </div>
            </div>        

            {/* Desktop Right Side - এটা আগের মতোই থাকবে, শুধু Cart div থেকে hidden md:flex সরাও */}
            <div className="hidden md:flex items-center gap-6 lg:gap-20 md:mr-10 lg:mr-40">
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <a target="_blank" href="https://www.swiggy.com/corporate/" className="font-semibold">Swiggy Corporate</a>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 relative">
                    <a target="_blank" href="https://www.swiggy.com/offers-near-me" className="font-semibold">%Offers</a>
                    <span className="absolute -top-2 -right-6 bg-green-500 text-white text-[10px] px-1 rounded-full">NEW</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <a target="_blank" href="https://www.swiggy.com/support" className="font-semibold">Help</a>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <Link to={"/CartCheckout"}>
                        <p className="font-semibold">🛒 Cart {`(${counter})`}</p>
                    </Link>
                </div>
            </div>

            {/* Mobile only - outer div এর বাইরে */}
            <div className="flex md:hidden items-center gap-4">
                <Link to="/CartCheckout">
                    <p className="font-semibold text-sm">🛒 {counter > 0 && <span className="text-green-600">{counter}</span>}</p>
                </Link>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-4 px-6 py-4 md:hidden z-20">
                    <a target="_blank" href="https://www.swiggy.com/corporate/" className="font-semibold hover:text-orange-600">Swiggy Corporate</a>
                    <a target="_blank" href="https://www.swiggy.com/offers-near-me" className="font-semibold hover:text-orange-600">%Offers</a>
                    <a target="_blank" href="https://www.swiggy.com/support" className="font-semibold hover:text-orange-600">Help</a>
                    <Link to="/CartCheckout" onClick={() => setMenuOpen(false)}>
                        <p className="font-semibold hover:text-orange-600">🛒 Cart {`(${counter})`}</p>
                    </Link>
                </div>
            )}



        </div>
    )
}