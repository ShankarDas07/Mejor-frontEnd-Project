import { useSelector } from "react-redux";

export default function CartCheckout() {

    const itemsObj = useSelector(state => state.cartSlice.itemsObj);

    const itemTotal = itemsObj.reduce((total, item) => {
        const price = item.price || item.defaultPrice;
        return total + (price / 100) * item.quantity;
    }, 0);

    const deliveryFee = 36;
    const gst = (itemTotal * 0.05).toFixed(2);
    const toPay = (itemTotal + deliveryFee + parseFloat(gst)).toFixed(0);

    return (
        <div className="w-[60%] mx-auto mt-10">

            {/* Restaurant Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-300">
                <img 
                    className="w-16 h-16 object-cover rounded-lg"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + itemsObj[0]?.imageId}
                />
                <div>
                    <p className="font-bold text-lg">{itemsObj[0]?.restaurant || "Restaurant"}</p>
                    <p className="text-gray-500 text-sm">Kolkata</p>
                    <div className="w-16 border-b-2 border-black mt-1"></div>
                </div>
            </div>

            {/* Items List */}
            <div className="mt-4">
                {itemsObj.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <span className="text-green-600 text-lg">🟩</span>
                            <p className="text-gray-800 font-medium">{item.name}</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-1">
                                <button className="text-green-700 font-bold">−</button>
                                <span className="font-bold">{item.quantity}</span>
                                <button className="text-green-700 font-bold">+</button>
                            </div>
                            <p className="text-gray-700 font-medium w-16 text-right">
                                ₹{((item.price || item.defaultPrice) / 100 * item.quantity).toFixed(0)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bill Details */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                <p className="font-bold text-lg mb-4">Bill Details</p>
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <p className="text-gray-600">Item Total</p>
                    <p className="font-medium">₹{itemTotal.toFixed(0)}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <p className="text-gray-600">Delivery Fee | 3.0 kms ⓘ</p>
                    <p className="font-medium">₹{deliveryFee}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <p className="text-gray-600">GST & Other Charges ⓘ</p>
                    <p className="font-medium">₹{gst}</p>
                </div>
                <div className="flex justify-between pt-4 border-t-2 border-black mt-2">
                    <p className="font-bold text-lg">TO PAY</p>
                    <p className="font-bold text-lg">₹{toPay}</p>
                </div>
            </div>

        </div>
    );
}