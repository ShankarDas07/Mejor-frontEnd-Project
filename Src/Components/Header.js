import { Link } from "react-router"

export default function Headers() {

    return (
        <>
            <header className="bg-[#ff5200] font-serif ">

                <div className="flex justify-between items-center container mx-auto py-6">
                    <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" />
                    <div className="text-white font-bold text-[16px] flex gap-10 items-center">
                        <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                        <a target="_blank" href="https://partner.swiggy.com/food/login">Partner with us</a>
                        <a target="_blank" className="border white py-3 px-4 rounded-2xl" href="https://www.swiggy.com/corporate/">Get the App</a>
                        <a target="_blank" className="bg-black py-3 px-4 rounded-2xl"  href="https://www.swiggy.com/corporate/">Sign-in</a>
                    </div>
                </div>

                 <div className="pt-16 pb-8 relative"> {/*  16*4 = 64px paddind Top(pt)      //  8*4 = 32px paddind bottom(pb)    */}
                    <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                    <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                    <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center ">
                        Order food & groceries. Discover best resturents. Swiggy it!
                    </div>

                    <div className="max-w-[60%] container mx-auto flex gap-10 mt-6">
                        <input className="bg-white w-[30%] px-6 py-4 rounded-2xl" type="text" placeholder="Enter your delivery location"></input>
                        <input className="bg-white w-[55%] px-6 py-4 rounded-2xl" type="text" placeholder="Search for resturent, item & more"></input>
                    </div>

                    <div className="mt-10 max-w-[80%] flex container mx-auto">
                        <Link to="/resturent"> {/* App.js file a Route r moddha resturent lekha a6a ti ay khana resturent hoya6a then ata ay image click korla resturent a jay js file ta link a6a seykhana niya jaba */}
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                        </Link>
                        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                        </a>
                        <a href="https://www.swiggy.com/dineout">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                        </a>
                    </div>

                </div>
                
            </header>
        </>
    )
}