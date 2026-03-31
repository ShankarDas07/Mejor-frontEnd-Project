export default function ShimmerEffect() {
    const shimmerItems = Array(12).fill(null);

    return (
        <div className="flex flex-wrap justify-center w-[90%] md:w-[80%] mx-auto gap-2 md:gap-3 mt-8 md:mt-10">
            {shimmerItems.map((_, index) => (
                <div key={index} className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[280px] mb-3">
                    {/* Image placeholder */}
                    <div className="w-full h-32 sm:h-36 md:h-40 lg:h-45 rounded-2xl bg-gray-300 animate-pulse"></div>
                    {/* Text placeholders */}
                    <div className="w-[95%] mx-auto mt-3 space-y-2">
                        <div className="w-3/4 h-4 bg-gray-300 rounded animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                        <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                        <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
