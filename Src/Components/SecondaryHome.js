import RestaurantsHeader from "./RestaurantsHeader";
import { Outlet } from "react-router";


export default function SecondaryHome(){
    return(
    <>
        <RestaurantsHeader></RestaurantsHeader>
        <Outlet></Outlet>
    </>
    )
}