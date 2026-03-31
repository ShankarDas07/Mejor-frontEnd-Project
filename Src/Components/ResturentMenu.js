
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router";
// import ResturentMenuCard from "./ResturentMenuCard";

// export default function ResturentMenu() {
//     const { id } = useParams();
//     const [RestuData, setRestuData] = useState([]);
//     const [selected, setVegSelected] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//                 // GitHub a json file ta upload kora tar link copy kor6i
//             // const response = await fetch(`https://raw.githubusercontent.com/ShankarDas07/Mejor-frontEnd-Project/main/ResturentMenuData/${id}.json`);
//             const response = await fetch(`https://raw.githubusercontent.com/ShankarDas07/Mejor-frontEnd-Project/main/ResturentMenuData/${id}.json`);

//             const data = await response.json();
//             const tempData = data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//             const filterData = tempData?.filter((items)=> "title" in items?.card?.card);
//             setRestuData(filterData);
//         }
//         fetchData();
//     },[]);

//     // console.log("RestuData:", RestuData);



//     return (
//         <div>
//             <div className="w-[60%] mt-15 mb-15 m-auto ">
//                 <Link to={`/city/Kolkata/${id}/search`}> {/* মানে button এ click করলে browser URL change হবে। React Router page reload না করে client side navigation করে। App.js a jaba niya dhakba ay link r url--> {/city/Kolkata/${id--> 123}/search`} ta kon route r sata match kor6a then oy element ta render korba*/}
//                     <button className=" w-full h-15 border text-xl text-center border-gray-400 bg-gray-200 rounded-4xl">Search for dishas</button>
//                 </Link>
//             </div>
//             <div className="w-[60%] mt-3 m-auto">
//                 <button className = {`border border-blue-600 rounded-2xl px-9 py-2 mr-4 ${(selected==="veg"?"bg-green-500":"bg-gray-300")}`} onClick={()=>setVegSelected(selected==='veg'?null:'veg')}>Veg</button>
//                 <button className = {` border border-black rounded-2xl px-5 py-2 ${(selected==="nonveg"?"bg-red-500":"bg-gray-300")}`} onClick={()=>setVegSelected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
//             </div>

//             <div className="w-[60%] mx-auto">
//                 {/* <h1>hello {id}</h1> */}
//                 {
//                     RestuData.map((manuItems)=><ResturentMenuCard key={manuItems?.card?.card?.title} manuItems={manuItems?.card?.card} VegSelected={selected}/>)
//                 }
//             </div>
//         </div>
//     );
// }



//                 // Swiggy api block kora diya6a ti r data fetch ho66a na
// import { useState,useEffect } from "react";
// import { useParams } from "react-router";

// export default function ResturentMenu(){
//     const {id} = useParams();
//     console.log(id);
//     const [RestuData,setRestuData] = useState(null);

//     useEffect(()=>{
//         async function fetchData(){ 
//             const proxyServer = "https://corsproxy.io/?" // proxy server r --> api block kora diya6a ti manual system a json file ta niya asa kora6i  nicha dhako 
//             const swiggyApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=${id}&submitAction=ENTER`;
//             const response = await fetch(`http://localhost:3000/menu/${id}`);
//             const dataFetch = await response.json(); // ay dataFetch r moddha onak obj file as6a seta amar dorkar nii tii . -> . -> kora onak name lika6i jata dorkar seta nabo 
//             const tempData = dataFetch.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;           
//             // const filterData = tempData?.filter((items)=> "title" in items?.card?.card); // 1st a to vetor a duklam onak ta niya tempData ta raklam jinis gulo. tarpor tempData r upor filter lagalam niya key banalam "title" mana jadar vetor title thakba shudu sey obj gulo ami nabo. sey title ta thakba --> items?.card?.card -->ay khana mana tempData r aro vetor a
//             setRestuData(tempData);
//         }
//         fetchData();
//     },[])  
//     console.log(RestuData);

//     return(<>
//         <h1>hello</h1>
//     </>)
// }




            // Today code
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import ResturentMenuCard from "./ResturentMenuCard";

export default function ResturentMenu() {
    const { id } = useParams();
    const [RestuData, setRestuData] = useState([]);
    const [selected, setVegSelected] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/ShankarDas07/Mejor-frontEnd-Project/main/ResturentMenuData/${id}.json`);
                const data = await response.json();

                // Debug: কোন index এ data আছে সেটা দেখো
                // console.log("Full cards array:", data.data?.cards);

                const tempData = data.data?.cards?.find(c => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                const filterData = tempData?.filter(
                    (items) => items?.card?.card && "title" in items.card.card
                );

                // console.log("filterData:", filterData);
                setRestuData(filterData ?? []); // ✅ undefined safe
            } 
            catch (err) {
                console.error("Fetch error:", err);
                setRestuData([]); // error হলেও empty array
            }
        }
        fetchData();
    }, [id]);

    return (
        <div>
            <div className="w-[90%] sm:w-[75%] md:w-[60%] mt-8 md:mt-15 mb-8 md:mb-15 mx-auto px-2 sm:px-0">
                <Link to={`/city/Kolkata/${id}/search`}>
                    <button className="w-full h-15 border text-xl text-center border-gray-400 bg-gray-200 rounded-4xl">
                        Search for dishas
                    </button>
                </Link>
            </div>
            <div className="w-[90%] sm:w-[75%] md:w-[60%] mt-3 mx-auto px-2 sm:px-0">
                <button
                    className={`border border-blue-600 rounded-2xl px-9 py-2 mr-4 ${selected === "veg" ? "bg-green-500" : "bg-gray-300"}`}
                    onClick={() => setVegSelected(selected === "veg" ? null : "veg")}>
                    Veg
                </button>
                <button
                    className={`border border-black rounded-2xl px-5 py-2 ${selected === "nonveg" ? "bg-red-500" : "bg-gray-300"}`}
                    onClick={() => setVegSelected(selected === "nonveg" ? null : "nonveg")}>
                    Non Veg
                </button>
            </div>

            <div className="w-[90%] sm:w-[75%] md:w-[60%] mx-auto px-2 sm:px-0">
                {RestuData.length === 0 ? (
                    <p className="text-center mt-10 text-gray-500">Loading...</p>
                ) : (
                    RestuData.map((manuItems) => (
                        <ResturentMenuCard
                            key={manuItems?.card?.card?.title}
                            manuItems={manuItems?.card?.card}
                            VegSelected={selected}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

