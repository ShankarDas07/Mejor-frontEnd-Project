import { GroceryData } from "../Utils/Grocery"
export default function GroceryOption(){
    return(
    <>
        <div className="w-[80%] container mx-auto bg-white mt-25">
            <div><h1 className="font-bold text-2xl">Order our best food options</h1></div>
            <div className="flex flex-nowrap overflow-x-auto gap-10 mt-5">
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