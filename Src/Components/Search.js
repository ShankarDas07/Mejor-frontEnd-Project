
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Recomanded from "./Recomanded";

export default function Search() {
    const { id } = useParams();
    const [searchText, setSearchText] = useState("");
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://raw.githubusercontent.com/ShankarDas07/Mejor-frontEnd-Project/main/ResturentMenuData/${id}.json`);
            const data = await response.json();
            const tempData = data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData?.filter((items) => "title" in items?.card?.card);
            
            // সব dishes এক array তে নিয়ে আসো
            const allDishes = filterData?.flatMap((category) => 
                category?.card?.card?.categories 
                    ? category?.card?.card?.categories?.flatMap((cat) => cat?.itemCards)
                    : category?.card?.card?.itemCards
            );
            setAllItems(allDishes);
        }
        fetchData();
    }, [id]);

    // function handleSearch() {
    //     const result = allItems?.filter((item) =>
    //         item?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    //     );
    //     setFilteredItems(result);
    // }

    return (
        <div className="w-[60%] mt-15 m-auto">
            <div className="flex gap-3">
                <input className="w-full h-12 border text-xl text-center border-gray-400 bg-gray-200 rounded-4xl"
                    placeholder="Search for dishes..."
                    value={searchText} onChange={(e) => {setSearchText(e.target.value);
                        const result = allItems?.filter((item) =>
                            item?.card?.info?.name?.toLowerCase().includes(e.target.value.toLowerCase())
                        );
                        setFilteredItems(result);
                    }}
                />
                {/* <button
                    className="bg-green-600 text-white px-6 py-2 rounded-4xl font-bold hover:bg-green-700 cursor-pointer"
                    onClick={handleSearch}
                >
                    Search
                </button> */}
            </div>

            <div className="mt-10">
                {
                    filteredItems?.map((item, index) => (<Recomanded key={item?.card?.info?.id + index} items={item?.card?.info}/>))
                }
            </div>
        </div>
    );
}