

import { RestaurantsDineout } from "../Utils/Restaurants";
import DineCard from "./DineCard";
export default function RestaurantsDineout(){
    return(
    <div className="w-[80%] container mx-auto bg-white">
        <div><h1 className="font-bold text-2xl">Discover best restaurants on Dineout</h1></div>
        <div className="flex flex-nowrap overflow-x-auto gap-5 mt-5 mb-20">
            {
                RestaurantsDineout.map((RestuData)=><DineCard key={RestuData?.info?.id} RestuData={RestuData}></DineCard>)
            }
        </div>
    
    </div>
    )
}