import ReactDOM from "react-dom/client";
import Header from "./Header"
import FoodOption from "./FoodOption";
import GroceryOption from "./GroceryOption";
import RestaurantsDineout from "./RestaurantsDineout";
import Footer from "./Footer"


export default function Home(){
    return(<>

        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <RestaurantsDineout></RestaurantsDineout>
        <Footer></Footer>


    </>)
}