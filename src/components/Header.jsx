import bgeclip from "../img/Ellip.png";
import dribbnle from "../img/dribbble.png";
import behance from "../img/behance.png";
import headerMail from "../img/Mail.png";
const Header = () => {
    return (
        <div>
            <div className="bg-[#ffdb8f] h-[471px] mt-[2rem] flex-col  text-center  flex relative z-[-2]">
                <div className="flex absolute justify-center  h-[100%]  w-[100%] z-[-1]">
                    <img className="flex" src={bgeclip} />
                </div>
                <h2 className="font-['Cinzel'] text-[20px] text-[#b25e2c] pt-[7rem]">
                    GROUP 8
                </h2>
                <h1 className="font-['Cinzel'] text-[71px] text-[#7c4521] font-[700]">
                    HOTEL UI KIT
                </h1>
                <div className="flex justify-center gap-[2rem] pt-[2rem] ">
                    <div className=" flex  w-[280px]">
                        <div className="bg-[#e69859] w-[70px] h-[70px] flex justify-center items-center">
                            <img className="w-[20px] h-[20px]" src={dribbnle} />
                        </div>
                        <p className="bg-white w-[80%] font-['Roboto'] flex justify-center items-center">
                            Dribble
                        </p>
                    </div>
                    <div className=" flex  w-[280px]">
                        <div className="bg-[#e97171] w-[70px] h-[70px] flex justify-center items-center">
                            <img className="w-[20px] h-[20px]" src={behance} />
                        </div>
                        <p className="bg-white w-[80%] font-['Roboto'] flex justify-center items-center">
                            Dehance.net
                        </p>
                    </div>
                    <div className=" flex  w-[280px]">
                        <div className="bg-[#b76b4e] w-[70px] h-[70px] flex justify-center items-center">
                            <img
                                className="w-[20px] h-[20px]"
                                src={headerMail}
                            />
                        </div>
                        <p className="bg-white w-[80%] font-['Roboto'] flex justify-center items-center">
                            info@neststrix.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
