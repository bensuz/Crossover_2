/* eslint-disable no-unused-vars */
import firstroompic from "./Assets/firstroompic.png";
import middleroompic from "./Assets/middleroompic.png";
import rightroompic from "./Assets/rightroompic.png";
import dots from "./Assets/DOTS.png";
import firstimg from "./Assets/1.png";
import secondimg from "./Assets/2.png";
import thirdimg from "./Assets/3.png";
import fourthimg from "./Assets/4.png";
import fifthimg from "./Assets/5.png";
import lessthansign from "./Assets/lessthansign.png";
import greatersign from "./Assets/greatersign.png";
import roof from "./Assets/roof.png";
import or from "./Assets/or.png";
import book from "./Assets/book.png";
import cinzel from "./Fonts/Cinzel-VariableFont_wght.ttf";

const SectionFour = () => {
    return (
        <div className="bg-[#ffe2a0] flex flex-col  items-center justify-start gap-10 p-5 ">
            <div className="flex items-center justify-around gap-10">
                <div className="bg-white w-[330px] h-[730px] shadow-[0 21px 29px] flex flex-col items-center gap-1 ">
                    <div className="flex flex-col items-center gap-1 pt-10 pb-5">
                        <h4 className="font-['cinzel'] text-[16px] text-[#353535] font-[700]">
                            APARTMENT{" "}
                        </h4>
                        <h2 className="font-['cinzel'] font-[700] text-[#7c4521] text-[34px]">
                            RESERVATION
                        </h2>
                    </div>
                    <div className="bg-[#fffbf5] flex flex-col gap-7 w-full  p-5 shadow-inner border-1 border-yellow-400">
                        <div>
                            <p className="text-[14px] font-[400] italic text-[#aa906b] pb-2">
                                Select Room
                            </p>
                            <div className="text-[13px] w-[250px] h-[50px] border border-[#f5ead7] bg-white flex justify-around items-center">
                                <p className="p-3 ">DOUBLE ROOM</p>
                                <div className="flex gap-5 items-center">
                                    <img src={or} alt="" />
                                    <img src={roof} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start gap-7 items-center ">
                            <div className="flex  flex-col  items-start gap-2">
                                <p className="text-[14px] font-[400] italic text-[#aa906b]">
                                    Adults
                                </p>{" "}
                                <div className="text-[13px] w-[110px] h-[50px] border border-[#f5ead7] bg-white flex items-center justify-around">
                                    <p>2</p>
                                    <div className="flex gap-5 items-center">
                                        <img src={or} alt="" />
                                        <img src={roof} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex  flex-col justify-center items-start gap-2">
                                <p className="text-[14px] font-[400] italic text-[#aa906b]">
                                    Children
                                </p>
                                <div className="text-[13px] w-[110px] h-[50px] border border-[#f5ead7] bg-white flex items-center justify-around">
                                    {" "}
                                    <p>0</p>
                                    <div className="flex gap-5 items-center ">
                                        <img src={or} alt="" />
                                        <img src={roof} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[14px] font-[400] italic text-[#aa906b] pb-2">
                                Check In
                            </p>

                            <div className="text-[13px] w-[250px] h-[50px] border border-[#f5ead7] bg-white flex items-center justify-around">
                                <p>10 OCT 2017</p>
                                <div className="flex gap-5 items-center">
                                    <img src={book} alt="" />
                                    <img src={or} alt="" />
                                    <img src={roof} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-[14px] font-[400] italic text-[#aa906b] pb-2">
                                Check Out
                            </p>

                            <div className="text-[13px] w-[250px] h-[50px] border border-[#f5ead7] bg-white flex items-center justify-around">
                                <p>15 OCT 2017</p>
                                <div className="flex gap-5 items-center">
                                    <img src={book} alt="" />
                                    <img src={or} alt="" />
                                    <img src={roof} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[70px] bg-[#7c4521] bg-gradient-to-t flex items-center justify-center shadow-xl shadow-[rgba(120,65,25,0.39)] mt-8">
                        <p className="text-white text-[13px] font-[500]">
                            CHECK AVAILIBILITY
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-2 bg-white w-[870px] h-[730px]">
                    <div className="flex flex-col items-center gap-1 pt-10 pb-5">
                        <h4 className="font-[cinzel] text-[16px] text-[#353535] font-[700]">
                            GALLERY
                        </h4>
                        <h2 className=" font-cinzel text-[#7c4521] text-[34px] font-[700]">
                            DISCOVER OUR HOTEL
                        </h2>
                    </div>
                    <div className="flex items-center justify-around bg-[#fffbf5] shadow-inner border-1 border-yellow-400 p-10 ">
                        <img
                            src={firstroompic}
                            alt="a bedroom picture"
                            className="w-[200px] h-[320px]"
                        />
                        <img
                            src={middleroompic}
                            alt="a living room picture"
                            className="w-[410px] h-[380px] border-8 shadow-lg border-white"
                        />
                        <img
                            src={rightroompic}
                            alt="another living room picture"
                            className="w-[200px] h-[320px]"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-20 mx-0 w-full">
                        <div className="flex justify-raound gap-3">
                            <div>
                                <div className="border border-[#cc994c] border-l-white w-[80px] h-[80px] flex items-center justify-center opacity-50 ">
                                    {" "}
                                    <img src={lessthansign} alt="" />{" "}
                                </div>
                            </div>
                            <div className="flex flex-col  justify-center items-start">
                                <p className="text-[#7c4521] text-[14px] font-[500] ">
                                    ROYAL
                                </p>
                                <p className="text-[#7c4521] text-[14px] font-[500] ">
                                    SUITE ROOM
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-cinzel text-[#353535] text-[30px] font-700">
                                DELUXE ROOM
                            </p>
                            <img src={dots} alt="dots" />
                        </div>
                        <div className="flex justify-raound gap-3">
                            <div className="flex flex-col justify-center items-end">
                                <p className="text-[#7c4521] text-[14px] font-[500] ">
                                    LARGE
                                </p>
                                <p className="text-[#7c4521] text-[14px] font-[500] ">
                                    TWIN ROOM
                                </p>
                            </div>
                            <div>
                                <div className="border border-[#cc994c] border-r-white w-[80px] h-[80px] flex items-center justify-center opacity-50">
                                    {" "}
                                    <img src={greatersign} alt="" />{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-1 bg-white flex items-center w-[1240px] h-[250px] ">
                <div className="flex items-center justify-around gap-2 h-[210px] w-[1240px] bg-[#fffbf5] shadow-inner border-1 border-yellow-400  ">
                    <img
                        className="w-[116px] h-[122px] "
                        src={firstimg}
                        alt=""
                    />
                    <span className="h-[45%] w-1 bg-[#cc994c] shadow-lg shadow-yellow-500 bg-opacity-5"></span>
                    <img
                        src={secondimg}
                        alt=""
                        className="w-[116px] h-[122px]"
                    />
                    <span className="h-[45%] w-1 bg-[#cc994c] shadow-lg shadow-yellow-500 bg-opacity-5"></span>
                    <img
                        src={thirdimg}
                        alt=""
                        className="w-[116px] h-[122px]"
                    />
                    <span className="h-[45%] w-1 bg-[#cc994c] shadow-lg shadow-yellow-500 bg-opacity-5"></span>
                    <img
                        src={fourthimg}
                        alt=""
                        className="w-[116px] h-[122px]"
                    />
                    <span className="h-[45%] w-1 bg-[#cc994c] shadow-lg shadow-yellow-500 bg-opacity-5"></span>
                    <img
                        src={fifthimg}
                        alt=""
                        className="w-[116px] h-[122px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
