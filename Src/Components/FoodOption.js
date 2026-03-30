import { imageGridCards } from "../Utils/FoodData";


export default function FoodOption(){
    return(
    <>
        <div className="w-[80%] container mx-auto bg-white mt-25">
            <div><h1 className="font-bold text-2xl">Shop groceries on Instamart</h1></div>
            <div className=" container mx-auto flex flex-wrap gap-5">
                {
                imageGridCards.map((FoodData)=>{
                    return (
                        <a key={FoodData.id} href={FoodData?.action?.link}>
                            <img className="w-27 h-35"
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId}
                            />
                        </a>
                    )
                })
            }
            </div>
        </div>

    </>
    )
}