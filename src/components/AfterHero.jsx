const AfterHero = ({ data }) => {
    return (
        <div className="w-[100%]">
            {
                data.map((item) => (
                    <div className={`flex ${item.style} my-[7%] justify-between`}>
                        <div className="w-[45%]">
                            <p className="text-[32px] font-[700] mb-[5%]">
                                {item.heading}
                            </p>

                            <p className="text-[18px] font-[400] w-[70%]">
                                {item.para1}
                            </p>
                            <p className="text-[18px] font-[400] w-[70%] mt-5">
                                {item.para2}
                            </p>
                        </div>


                        <div className=" border-red-500 w-[45%]">
                            <img src={item.image} alt="" srcset="" className="" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AfterHero;