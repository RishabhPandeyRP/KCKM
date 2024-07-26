import hero_img from "../assets/create-a-3d-image-that-embodies-the-following-comp-1jPV6THBTWWmBz3qww-Nlg-GgQkXsLkRUG7lfFFiYurcA-removebg-preview.png"
import AfterHero from "./AfterHero";
import nanoSat from "../assets/nanoStaellite.jpg"
import distanceMangr from "../assets/distanceManager.jpg"
const LandingPage = () => {
    const data = [
        {
            heading:"Connect globally",
            para1:"Remain anonymous or build your personal profile while engaging with over 1 million verified physicians.",
            para2:"Talk medicine, talk news, talk gossip. Enjoy a “Sermo” about anything (it’s Latin for talk).",
            highData:" 1 million verified physicians",
            style:"w-[100%] flex-row ",
            image:nanoSat
        },

        {
            heading:"Earn for your insights",
            para1:"Earn money for participating in paid medical research studies and contributing insights to your peers’ current challenges.",
            para2:"Just last year, Sermo members earned over $20 million dollars collectively.",
            highData:" 1 million verified physicians",
            style:"w-[100%] flex-row-reverse ",
            image:distanceMangr
        },

        // {
        //     heading:"Solve patient cases",
        //     para1:"Ever need a second opinion on a tough patient case? We all do.",
        //     para2:"With 36,000+ cases solved each year, you can support better patient outcomes with thousands of second opinions.",
        //     highData:" 1 million verified physicians",
        //     style:"w-[100%] flex-row ",
        //     image:hero_img
        // },

        // {
        //     heading:"Rate drugs",
        //     para1:"Explore the world’s only and largest database of physician drug reviews, with over 1,000,000 ratings and counting.",
        //     para2:"Share your experiences to help improve treatment decisions globally.",
        //     highData:" 1 million verified physicians",
        //     style:"w-[100%] flex-row-reverse ",
        //     image:hero_img
        // }
    ]
    return (
        <div className=" flex-col">
            {/* hero section */}
            <div className="  border-green-500 w-[80%] h-fit mx-auto flex gap-[10%] mt-[7%] ml-[13%]">
                {/* text */}
                <div className="w-[40%]  border-red-500 ">
                    <p className="text-[44px] font-[700]">
                        Enhancing Lives with Sustainable Technology
                    </p>
                    <p className="text-[18px] font-[400] w-[85%] mt-[5%]">
                    With our company’s logo proudly stating “Comfort to life,” we promise to deliver products that bring ease and joy to the lives of the elderly. We are devoted to making a difference in the world, one innovative solution at a time.
                    </p>
                    <button className="border border-[#00DA00] bg-[#00DA00] text-white px-4 py-[2%] rounded-md hover:bg-[#50da00] hover:border-[#68c00ea]text-[14px] font-[500] mt-[5%]">Sign Up for free</button>
                </div>

                {/* image */}
                <div className="w-[45%]">
                    <img src={hero_img} alt="" className=" scale-[110%] mt-[5%]" />
                </div>


            </div>

            {/* <div className="w-[80%] mx-auto mt-[7%]">
                
                <div className=" text-[24px] font-[400] italic w-[50%] mx-auto text-center text-neutral-600">
                Sermo has transformed the way I connect, collaborate, and stay informed within the global medical community. The platform’s robust features – including forums, polls, and paid surveys – enable me to stay educated and adapt my practice to evolving standards of care.
                </div>

                
                <div>
                    <img src="" alt="" />
                    <p></p>
                    <p></p>
                </div>
            </div> */}

            <div className="w-[80%] mx-auto  mt-[9%] ml-[13%]">
                <p className="text-[40px] font-[700] w-[50%]  mb-[8%] mx-auto  border-red-300 text-center">
                    Products
                </p>

                <AfterHero data={data}></AfterHero>

            </div>

            {/* <div className="flex w-[75%] mx-auto border-red-500 justify-between mt-[12%] mb-[12%]">
                <div className="w-[25%]">
                    <p className="text-[44px] font-[700]">
                    Ready to experience this community?
                    </p>

                    <button className="border border-[#00DA00] bg-[#00DA00] text-white px-4 py-[2.5%] rounded-md hover:bg-[#50da00] hover:border-[#68c00ea]text-[14px] font-[500] mt-[10%]">Access your profile</button>
                </div>



                <div className="w-[50%]">
                    <img src={hero_img} alt="" className="scale-[90%]"/>
                </div>
            </div> */}
        </div>
    )
}

export default LandingPage;
