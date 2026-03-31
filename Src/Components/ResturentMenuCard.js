
// import { useState } from "react";
// import Recomanded from "./Recomanded";
// export default function ResturentMenuCard({manuItems}){
//     const [isOpen, setisOpen] = useState(true);

//     if("categories" in manuItems){
//         return(
//             <div className="w-full">
//                 <p className="w-full text-2xl font-bold font-[18px]" >{manuItems.title}</p>
//                 <div>
//                     {
//                         manuItems?.categories?.map((items)=> <ResturentMenuCard key={items?.title} manuItems={items}/>)
//                     }
//                 </div>
//             </div>
//         )
//     }

//     if(!isOpen){
//         return(
//         <div className="w-full">
            
//             <div className="flex justify-between w-full mt-8 mb-8">
//                 <p className="w-full text-2xl font-bold font-[18px] ">{manuItems.title}</p>
//                 <button className="text-2xl font-bold font-[18px] "  onClick={()=> setisOpen(!isOpen)}>{isOpen?'⌄':'⌃'}</button>
//             </div>
//             <div className="w-full h-4 bg-gray-100"></div>
//         </div>
//         )
//     }
//     return(
//     <div className="w-full">

//         <div className="flex justify-between w-full mt-8 mb-8">
//             <p className="w-full text-2xl font-bold font-[18px] ">{manuItems.title}</p>
//             <button className="text-2xl font-bold font-[18px] "  onClick={()=> setisOpen(!isOpen)}>{isOpen?'⌄':'⌃'}</button>
        
//         </div>
        
//         <div>
//             {
//                 manuItems?.itemCards?.map((items)=><Recomanded key={items?.card?.info?.id} items={items?.card?.info}></Recomanded>)
//             }
//         </div>
        
//         <div className="w-full h-4 bg-gray-100"></div>

//     </div>
//     )
// }

import { useState } from "react";
import Recomanded from "./Recomanded";
import TopPicks from "./TopPicks";

export default function ResturentMenuCard({manuItems,VegSelected}){

    const [isOpen, setisOpen] = useState(true);
    

    if(VegSelected==="veg"){
        return(
        <div className="w-full">

                    {/* Header */}
                    <div className="flex justify-between items-center w-full mt-4 mb-4 cursor-pointer" onClick={()=> setisOpen(!isOpen)}>
                        <p className="text-lg font-bold"> {manuItems.title} 
                            <span className="text-gray-500 font-normal text-base ml-1">({manuItems?.itemCards?.length})</span> {/* Recommended(18) --> ay ja 18 ta show ho66a tar jonna */}
                        </p>
                        <span className="text-xl text-gray-600"> {isOpen ? '▲' : '▼'} </span>
                    </div>

                    {/* Items */}
                    {isOpen && (
                        <div>
                            {
                                // manuItems?.itemCards?.filter((vegFood)=>"isVeg" in vegFood?.card?.info).map((items)=><Recomanded key={items?.card?.info?.id} items={items?.card?.info}/> )
                                manuItems?.itemCards?.filter((vegFood) => vegFood?.card?.info?.isVeg === 1).map((items)=><Recomanded key={items?.card?.info?.id} items={items?.card?.info}/> )
                            }
                        </div>
                    )}

                    <div className="w-full h-4 bg-gray-100 mt-4"></div>

        </div>
        )
    }
    
    if(VegSelected==="nonveg"){
        return(
        <div className="w-full">

                    {/* Header */}
                    <div className="flex justify-between items-center w-full mt-4 mb-4 cursor-pointer" onClick={()=> setisOpen(!isOpen)}>
                        <p className="text-lg font-bold"> {manuItems.title} 
                            <span className="text-gray-500 font-normal text-base ml-1">({manuItems?.itemCards?.length})</span> {/* Recommended(18) --> ay ja 18 ta show ho66a tar jonna */}
                        </p>
                        <span className="text-xl text-gray-600"> {isOpen ? '▲' : '▼'} </span>
                    </div>

                    {/* Items */}
                    {isOpen && (
                        <div>
                            {
                                // manuItems?.itemCards?.filter((vegFood)=>!("isVeg" in vegFood?.card?.info)).map((items)=><Recomanded key={items?.card?.info?.id} items={items?.card?.info}/> )
                                manuItems?.itemCards?.filter((vegFood) => !(vegFood?.card?.info?.isVeg)).map((items)=><Recomanded key={items?.card?.info?.id} items={items?.card?.info}/> )

                            }
                        </div>
                    )}

                    <div className="w-full h-4 bg-gray-100 mt-4"></div>

        </div>
        )
    }


    if("categories" in manuItems){
        return(
            <div className="w-full">
                <p className="w-full text-2xl font-bold mt-4">{manuItems.title}</p>
                <div>
                    {
                        manuItems?.categories?.map((items)=> <ResturentMenuCard key={items?.title} manuItems={items} VegSelected={VegSelected}/>)
                    }
                </div>
            </div>
        )
    }

    if("carousel" in manuItems){
        return(
            
            <div className="w-full">
                <p className="w-full text-2xl font-bold mt-4">{manuItems.title}</p>
                <div className="flex overflow-x-auto gap-4 py-2">
                    {
                        manuItems?.carousel?.map((items)=> items?.dish?.info? <TopPicks key={items?.dish?.info?.id} items={items?.dish?.info}/> : null)
                    }
                </div>
                <div className="w-full h-4 bg-gray-100 mt-8"></div>

            </div>
        )
    }

    return(
            <div className="w-full">

                {/* Header */}
                <div className="flex justify-between items-center w-full mt-4 mb-4 cursor-pointer" onClick={()=> setisOpen(!isOpen)}>
                    <p className="text-lg font-bold"> {manuItems.title} 
                        <span className="text-gray-500 font-normal text-base ml-1">({manuItems?.itemCards?.length})</span> {/* Recommended(18) --> ay ja 18 ta show ho66a tar jonna */}
                    </p>
                    <span className="text-xl text-gray-600"> {isOpen ? '▲' : '▼'} </span>
                </div>

                {/* Items */}
                {isOpen && (
                    <div>
                        {
                            manuItems?.itemCards?.map( (items)=><Recomanded key={items?.card?.info?.id} items={items?.card?.info}/> )
                        }
                    </div>
                )}

                <div className="w-full h-4 bg-gray-100 mt-4"></div>

            </div>
    )
}