import React from "react";
import logo from "../assets/logo2.png"
import hamburg from "../assets/hamburger.png"
import dropicon from "../assets/down-arrow (1).png"
const NavBar = () => {
    const Newsdata = ["ajsdgkf", "asdjfg", "asjdfg", "skduffgj"];
    console.log(typeof Newsdata, Newsdata);

    return (
        <div className="h-[70px]  border-violet-600 flex justify-between pt-3 px-3 ">
            {/* logo and multiple options */}
            <div className="flex items-center gap-10">
                {/* logo */}
                <div className=" border-red-600 w-fit ml-7 h-fit">
                    <img src={logo} alt="" className="w-[55px]"/>
                </div>

                {/* multiple options */}
                <div className="hidden sm:flex gap-8 text-[14px] font-[500] lg:flex sm:max-lg:hidden ">
                    {['About', 'Blog', 'Resources'].map((item, index) => (
                        <div key={index} className="relative group ">
                            <span className="hover:text-[#5BFF3C] flex items-center gap-1">
                                {item}
                                <img src={dropicon} alt="" className="w-[15px] h-[15px] "/>
                            </span>
                            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg  rounded-md px-5 w-[150px] top-3 ">
                                <span className="p-2 hover:bg-gray-100 mt-4">Option 1</span>
                                <span className="p-2 hover:bg-gray-100">Option 2</span>
                                <span className="p-2 hover:bg-gray-100">Option 3</span>
                                <span className="p-2 hover:bg-gray-100">Option 4</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* login and signup buttons */}
            <div className="mr-7 items-center hidden sm:flex gap-10 text-[14px] font-[500] lg:flex sm:max-lg:hidden">
                <button className="hover:text-[#6200EA]">Log In</button>
                <button className="border border-[#00DA00] bg-[#00DA00] text-white px-4 py-[6%] rounded-md hover:bg-[#50da00] hover:border-[#68c00ea]">Sign Up</button>
            </div>
            <div className="mr-7 my-3 lg:hidden md:block w-fit h-fit">
                <img src={hamburg} alt="" className="w-[25px] h-[25px]" />
            </div>
        </div>
    )
}

export default NavBar;
