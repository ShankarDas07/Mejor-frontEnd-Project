// import { RestaurantsDineout } from "../Utils/Restaurants";

// export default function DineCard({RestuData}){
//     return(
//         <div className="mx-w-sm flex-none overflow-x-auto rounded-2xl">
//             <a href={RestuData.cta.link}>
//                 <div className="relative">
//                     <img className="w-[326px] h-[189px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + RestuData?.info?.mediaFiles[0]?.url}/>
//                     <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-black/100 to-transparent"></div>
//                     <p className="absolute bottom-4 left-4 text-white font-bold"> {RestuData?.info?.name}</p>
//                     <p className="absolute bottom-4 right-4 text-white">{"★ "+RestuData?.info?.rating?.value}</p>
//                 </div>

//                 <div>

//                 </div> 
//                 <div>

//                 </div>
//             </a>
//         </div>
//     )
// }

export default function DineCard({ RestuData }) {
    const info = RestuData?.info;
    const vendorOffer = info?.vendorOffer?.info;
    const otherOffer = info?.vendorOffer?.otherOffersInfo?.[0];
    const customerOffer = info?.customerOffer?.info;

    // Primary offer: pre-book offer (green badge) thakle seta, nahoy regular offer
    const primaryOffer = otherOffer?.offerType === "OFFER_TYPE_V2_PRE_BOOK" ? otherOffer : vendorOffer;
    const offerCount = (info?.vendorOffer?.offerCount ?? 1) - 1;

    return (
        <div className="flex-none w-[326px] rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <a href={RestuData?.cta?.link} target="_blank" rel="noreferrer">

                {/* ===== IMAGE SECTION ===== */}
                <div className="relative">
                    <img className="w-full h-[189px] object-cover"
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.mediaFiles?.[0]?.url}
                        alt={info?.name}
                    />
                    {/* Dark gradient at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Restaurant name & rating */}
                    <p className="absolute bottom-3 left-3 text-white font-bold text-lg leading-tight drop-shadow">
                        {info?.name}
                    </p>
                    <p className="absolute bottom-3 right-3 text-white text-sm font-semibold flex items-center gap-1">
                        <span className="text-green-400">★</span> {info?.rating?.value}
                    </p>
                </div>

                {/* ===== INFO SECTION ===== */}
                <div className="px-3 pt-3 pb-1">
                    {/* Cuisines & Cost */}
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>{info?.cuisines?.join(" •")}</span>
                        <span>{info?.costForTwo}</span>
                    </div>

                    {/* Locality & Distance */}
                    <div className="flex justify-between text-sm text-gray-500 mt-0.5">
                        <span>{info?.locationInfo?.formattedAddress}</span>
                        <span>{info?.locationInfo?.distanceString}</span>
                    </div>
                </div>

                {/* ===== OFFER BADGE (Green) ===== */}
                {primaryOffer && (
                    <div className="mx-3 mt-2 mb-1 bg-green-600 rounded-lg px-3 py-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            {/* Offer icon */}
                            <span className="text-white text-base">🏷️</span>
                            <span className="text-white text-sm font-semibold">
                                {primaryOffer?.description}
                                {primaryOffer?.offerType === "OFFER_TYPE_V2_PRE_BOOK" && " on pre-booking"}
                            </span>
                        </div>
                        {offerCount > 0 && (
                            <span className="text-white text-xs font-semibold whitespace-nowrap">
                                + {offerCount} more
                            </span>
                        )}
                    </div>
                )}

                {/* ===== BANK OFFER (Light Green) ===== */}
                {customerOffer && (
                    <div className="mx-3 mb-3 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                        <span className="text-green-700 text-sm font-medium">
                            {customerOffer?.description?.replace("+ ", "Up to ")}
                        </span>
                    </div>
                )}

            </a>
        </div>
    );
}