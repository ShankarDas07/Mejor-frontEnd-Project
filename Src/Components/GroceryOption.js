import { GroceryData } from "../Utils/Grocery"
export default function GroceryOption(){
    return(
    <>
        <div className="w-[90%] md:w-[80%] container mx-auto bg-white mt-10 md:mt-25">
            <div><h1 className="font-bold text-xl md:text-2xl">Order our best food options</h1></div>
            <div className="flex flex-nowrap overflow-x-auto gap-5 md:gap-10 mt-5 pb-2">
                {
                GroceryData.map((GroData)=>{
                    return (
                        <div key={GroData.id}>
                            <a href={GroData?.action?.link}>
                                <img 
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/"+GroData?.imageId}
                                />
                            </a>
                            <h1 className="w-36 h-12 mt-2 text-center">{GroData?.action?.text}</h1>
                        </div>
                    )   
                })
            }
            </div>
        </div>
    </>
    )
}