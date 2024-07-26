import logo from "../assets/Screenshot 2024-07-26 160019.png"
import mask1 from "../assets/Mask Group.png"
import mask2 from "../assets/Mask Group (1).png"
import mask3 from "../assets/Mask Group (2).png"

const Footer = ()=>{
    return(
        <div className="">
            <div className="flex justify-between px-[5%] w-[80%] mx-auto items-center">
                {/* logo */}
                <div>
                    <img src={logo} alt="" className=""/>
                </div>

                {/* items */}
                <div>
                    {/* <p className="text-[14px] font-[500]">One Life Healthcare</p> */}
                    <p className="text-[14px] font-[400]">About</p>
                    <p className="text-[14px] font-[400]">Careers</p>
                    <p className="text-[14px] font-[400]">Contact Us</p>
                </div>
            </div>

            <div className=" bg-[#ECEDEF] mt-4">
                    <div className="w-[80%] mx-auto flex justify-between py-7 px-[5%]">
                        <p className="text-[12px] font-[400]">
                            Copyright © 2024 One Life Healthcare
                        </p>

                        <div className="flex gap-3">
                            <img src={mask1} alt="" className="w-[20px] h-[20px]"/>
                            <img src={mask2} alt="" className="w-[20px] h-[20px]"/>
                            <img src={mask3} alt="" className="w-[20px] h-[20px]"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Footer;