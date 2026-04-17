export default function Footer() {
    return (
        <footer className="bg-[#f0f0f5] w-full mt-10">
            <div className="w-[80%] mx-auto py-12">

                {/* ===== TOP SECTION ===== */}
                <div className="flex flex-wrap gap-10">

                    {/* Logo + Copyright */}
                    <div className="min-w-[180px] flex-shrink-0">
                        <div className="flex items-center gap-2 mb-3">
                            {/* Swiggy logo icon */}
                            {/* <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp" className="w-32 h-auto" alt="Swiggy" /> */}
                            <img className="w-8 h-8 md:w-10 md:h-10 object-contain" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="logo" />
                            <h1 className="font-bold text-xl text-[#ff6b35]">Foody</h1>
                        </div>
                        <p className="text-gray-500 text-sm">© 2025 Foody Limited</p>
                    </div>

                    {/* Company */}
                    <div className="min-w-[140px]">
                        <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            {["About Us", "Swiggy Corporate", "Careers", "Team", "Swiggy One", "Swiggy Instamart", "Swiggy Dineout", "Minis", "Pyng"].map(item => (
                                <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact us + Legal */}
                    <div className="min-w-[160px] flex flex-col gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">Contact us</h3>
                            <ul className="space-y-3 text-gray-500 text-sm">
                                {["Help & Support", "Partner With Us", "Ride With Us"].map(item => (
                                    <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                            <ul className="space-y-3 text-gray-500 text-sm">
                                {["Terms & Conditions", "Cookie Policy", "Privacy Policy"].map(item => (
                                    <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Available in */}
                    <div className="min-w-[160px]">
                        <h3 className="font-semibold text-gray-800 mb-4">Available in:</h3>
                        <ul className="space-y-3 text-gray-500 text-sm mb-4">
                            {["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"].map(city => (
                                <li key={city}><a href="#" className="hover:text-orange-500 transition-colors">{city}</a></li>
                            ))}
                        </ul>
                        {/* Cities dropdown */}
                        <div className="relative inline-block">
                            <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm text-gray-600 cursor-pointer focus:outline-none focus:border-orange-400">
                                <option>685 cities</option>
                            </select>
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▼</span>
                        </div>
                    </div>

                    {/* Life at Swiggy + Social */}
                    <div className="min-w-[180px] flex flex-col gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">Life at Swiggy</h3>
                            <ul className="space-y-3 text-gray-500 text-sm">
                                {["Explore With Swiggy", "Swiggy News", "Snackables"].map(item => (
                                    <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-4">Social Links</h3>
                            <div className="flex items-center gap-3">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/company/swiggy-in/" className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 hover:border-orange-400 transition-colors text-gray-600 hover:text-orange-500">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/swiggyindia/?hl=en" className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 hover:border-orange-400 transition-colors text-gray-600 hover:text-orange-500">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                                        <circle cx="17.5" cy="6.5" r="1" />
                                    </svg>
                                </a>
                                {/* Facebook */}
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 hover:border-orange-400 transition-colors text-gray-600 hover:text-orange-500">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                    </svg>
                                </a>
                                {/* Pinterest */}
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 hover:border-orange-400 transition-colors text-gray-600 hover:text-orange-500">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                                    </svg>
                                </a>
                                {/* Twitter/X */}
                                <a href="https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-200 hover:border-orange-400 transition-colors text-gray-600 hover:text-orange-500">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===== DIVIDER ===== */}
                <hr className="my-8 border-gray-300" />

                {/* ===== BOTTOM SECTION ===== */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-700 font-semibold text-base text-center md:text-left">
                        For better experience, download the Swiggy app now
                    </p>
                    <div className="flex items-center gap-4">
                        {/* App Store */}
                        <a href="#" className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors">
                            <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            <div>
                                <div className="text-[9px] text-gray-300 leading-tight">Download on the</div>
                                <div className="text-sm font-semibold leading-tight">App Store</div>
                            </div>
                        </a>
                        {/* Google Play */}
                        <a href="#" className="flex items-center gap-2 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.18 23.76c.3.16.64.2.97.12L14.87 12 11 8.13 3.18 23.76z" fill="#EA4335"/>
                                <path d="M20.47 10.28L17.5 8.6l-3.36 3.37 3.36 3.37 3-1.7a1.96 1.96 0 000-3.36z" fill="#FBBC04"/>
                                <path d="M3.18.24A1.96 1.96 0 002 2.02v19.96c0 .74.42 1.4 1.18 1.78L14.87 12 3.18.24z" fill="#4285F4"/>
                                <path d="M14.87 12L3.18.24c.33-.08.67-.04.97.12l11.72 6.62L14.87 12z" fill="#34A853"/>
                                <path d="M14.87 12l.98.98-11.72 6.62c-.3.16-.64.2-.97.12L14.87 12z" fill="#34A853"/>
                            </svg>
                            <div>
                                <div className="text-[9px] text-gray-300 leading-tight">GET IT ON</div>
                                <div className="text-sm font-semibold leading-tight">Google Play</div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}