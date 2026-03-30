

import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestaurantsHeader(){

    const counter = useSelector(state=> state.cartSlice.count);

    return(
        <div className="h-25 flex items-center justify-between px-10 py-4 shadow-md sticky top-0 bg-white z-10">
            
            {/* Logo */}
            <div className="flex items-center gap-20 text-[18px] ml-40">
                <div className="w-40 h-12  rounded-xl flex items-center justify-center">
                    <img className="w-30 h-10" src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" />
                </div>
                <div className="flex items-center gap-1 cursor-pointer border-b-2 hover:text-orange-600 pb-1">
                    <span className="font-semibold">Other ▼</span>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-20 mr-40">
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <a target="_blank" href="https://www.swiggy.com/corporate/" className=" font-semibold">Swiggy Corporate</a>
                </div>
                {/* <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <span className="text-xl font-semibold">🔍 Search</span>
                </div> */}
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 relative">
                    <a target="_blank" href="https://www.swiggy.com/offers-near-me" className=" font-semibold">%Offers</a>
                    <span className="absolute -top-2 -right-6 bg-green-500 text-white text-[10px] px-1 rounded-full">NEW</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <a target="_blank" href="https://www.swiggy.com/support" className="font-semibold">Help</a>
                </div>
                {/* <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <a target="_blank" href="" className="text-xl font-semibold">👤 Sign In</a>
                </div> */}
                <div className="w-28 flex items-center gap-2 cursor-pointer hover:text-orange-600">
                    <Link to={"/CartCheckout"}>
                    <p className="font-semibold">🛒 Cart {`(${counter})`}</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}