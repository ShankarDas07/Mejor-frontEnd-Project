import { Link } from "react-router";



export default function RestCard({RestuInfo}){
    return(
        <Link to={"/city/Kolkata/"+RestuInfo?.info?.id}>
            {/* <h1>{RestuInfo?.info?.id}</h1> */}
            
            <div className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[280px] mb-3 transform transition duration-200 hover:scale-95">
                <div>
                    <img className="w-full h-32 sm:h-36 md:h-40 lg:h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestuInfo?.info?.cloudinaryImageId}></img>
                </div>

                <div className=" w-[92%] mx-auto ">
                    <div className="font-bold text-sm md:text-base truncate"> {RestuInfo?.info?.name} </div>

                    <div className="flex gap-4">
                        <p className="text-s">{"★ "+RestuInfo?.info?.avgRatingString}</p>
                        <p className="text-s font-semibold">{" •"+RestuInfo?.info?.sla?.slaString}</p>
                    </div>
                    <div className="text-s text-gray-500">
                        <p className="truncate">{RestuInfo?.info?.cuisines.join(" ")}</p>  {/* mana array ta onak rokom name a6a to tadar moddha space diya sob gulo print hoba tii join(" ") */}
                    </div>

                    <div className="text-s text-gray-500">
                        <p>{RestuInfo?.info?.areaName}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}