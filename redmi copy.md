    useEffect(() => {
        async function fetchData() {
                // GitHub a json file ta upload kora tar link copy kor6i
            const response = await fetch("https://raw.githubusercontent.com/ShankarDas07/Mejor-frontEnd-Project/main/ResturentMenuData.json");
            const data = await response.json();

            const tempData = data.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData?.filter((items)=> "title" in items?.card?.card);
            
            setRestuData(filterData);
        }
        fetchData();
    },[]);


    https://media-assets.swiggy.com/swiggy/image/upload/

    morning data1   time- 9:42 --> https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5643&lng=88.3693&carousel=true&third_party_vendor=1









    morning data2(click r vetorar data)  time- 9:42 --> https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=468705&submitAction=ENTER


    night data2 11:50 -> https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=1030927&submitAction=ENTER





816377.json   ← Pizza Hut
565580.json   ← KFC
1047000.json  ← Little Italy
985566.json   ← Chinese Wok
967050.json   ← Belgian Waffle c0
324202 -> Oven Story Pizza
1126254 -> Hotel Sideshwari Ashram
19515 -> Mezban Ripon Street
157636 ->Kochi Kalapata
8912 -> Subway
407661 -> Burger king
23945 -> Domino's Pizza
