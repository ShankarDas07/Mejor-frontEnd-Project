import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import ShimmerEffect from "./ShimmerEffect";
import Footer from "./Footer";

export default function FoodDeliveryAvailableRestu(){
    const [RestuData, setRestuDta] = useState([]); // map a only arr kaj kora 
    useEffect(()=>{
        async function fetchData(){ 
                    // Swiggy api block kora6a ti github thaka fetch kor6i
            // const proxyServer = "https://corsproxy.io/?"; // proxy server r 
            // const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5643&lng=88.3693&carousel=true&third_party_vendor=1";
            // const response = await fetch(proxyServer+swiggyApi);
            const response = await fetch("https://raw.githubusercontent.com/ShankarDas07/Mejor-frontEnd-Project/main/FoodDeliveryAvailableRestu/FoodDeliveryAvailableRestu.json");
            const dataFetch = await response.json(); // ay dataFetch r moddha onak obj file as6a seta amar dorkar nii tii . -> . -> kora onak name lika6i jata dorkar seta nabo 
            setRestuDta(dataFetch?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    },[])

    // console.log(RestuData)

        //SHIMMER effect jhokan data load hoba thokon ui a to ke6o dhaka hoba shudu white dhakala user exprience kharap hoba
    if(RestuData.length==0){
        return <ShimmerEffect></ShimmerEffect>
    }

    return(<>   
        <div className="flex flex-wrap justify-center w-[90%] md:w-[80%] mx-auto gap-2 md:gap-3 mt-8 md:mt-10">            {
                RestuData.map((RestuInfo)=>{ // {} use korla return dita hoba. direct likla no return  --> RestuData.map((RestuInfo)=><RestCard key={RestuInfo.info.id} RestuInfo={RestuInfo}></RestCard>)
                    return <RestCard key={RestuInfo.info.id} RestuInfo={RestuInfo}></RestCard>
            })
            }
        </div>
        <Footer></Footer>

    </>)
}