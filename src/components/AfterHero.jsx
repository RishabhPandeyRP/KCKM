const AfterHero = ({ data }) => {
    return (
        <div className="w-[100%]  border-blue-700 -ml-10">
            {
                data.map((item) => (
                    <div className={`flex ${item.style} my-[10%] justify-center items-center mx-auto   border-green-500 w-fit gap-[150px]`}>
                        <div className="w-[605px] mx-[10%]  border-red-500">
                            <p className="text-[32px] font-[700] mb-[5%]">
                                {item.heading}
                            </p>

                            {/* <p className="text-[18px] font-[400] w-[70%]">
                                {item.para1}
                            </p>
                            <p className="text-[18px] font-[400] w-[70%] mt-5">
                                {item.para2}
                            </p> */}
                        </div>


                        <div className=" border-red-500 w-[45%]">
                            <img src={item.image} alt="" srcset="" 
                            className="w-[250px] rounded-md" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AfterHero;
