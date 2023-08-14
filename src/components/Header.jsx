import React from "react";
import bgeclip from "../img/Ellip.png";
import dribbnle from "../img/dribbble.png";
import behance from "../img/behance.png";
import headerMail from "../img/Mail.png";
const Header = () => {
  return (
    <div>
      <div className="bg-[#ffe29e] h-[471px] mt-[2rem] flex-col  text-center left-[40%] ">
        <div className="flex absolute justify-center w-[100%]  ">
          <img className="flex w-[55%] " src={bgeclip} />
        </div>
        <h2 className="font-['Cinzel'] text-[20px] text-[#b25e2c] pt-[7rem]">
          GROUP 8
        </h2>
        <h1 className="font-['Cinzel'] text-[71px] text-[#7c4521] font-[700]">
          HOTEL UIKIT
        </h1>
        <div className="flex justify-center gap-[2rem]  ">
          <div className=" flex border-2 border-black w-[280px]">
            <div className="bg-[#e69859] w-[70px] h-[70px] flex justify-center items-center">
              <img className="w-[20px] h-[20px]" src={dribbnle} />
            </div>
            <p className="bg-white w-[80%] font-['Roboto'] flex justify-center items-center">
              Dribble
            </p>
          </div>
          <div className=" flex border-2 border-black w-[280px]">
            <div className="bg-[#e97171] w-[70px] h-[70px] flex justify-center items-center">
              <img className="w-[20px] h-[20px]" src={behance} />
            </div>
            <p className="bg-white w-[80%] font-['Roboto'] flex justify-center items-center">
              Dehance.net
            </p>
          </div>
          <div className=" flex border-2 border-black w-[280px]">
            <div className="bg-[#b76b4e] w-[70px] h-[70px] flex justify-center items-center">
              <img className="w-[20px] h-[20px]" src={headerMail} />
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
