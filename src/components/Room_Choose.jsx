import roombg from "../img/Roombg.png";
import room1 from "../img/Room1.png";
import room2 from "../img/Room2.png";
import room3 from "../img/Room3.png";
import Rectangle_l from "../img/Rectangle_l.png";
import Rectangle_r from "../img/Rectangle_r.png";
import im23 from "../img/im23.png";
import RoomNumber from "../img/RoomNumber.png";
import Roomicon1 from "../img/Roomicon1.png";
import Roomicon2 from "../img/Roomicon2.png";
import Roomicon3 from "../img/Roomicon3.png";
import RoomLine from "../img/RoomLine.png";

const Room_Choose = () => {
  return (
    <section className="p-[3rem] flex-col relative">
      <div className="bg-white flex h-[200px] relative">
        <div className="flex pt-[2rem]   pl-[2rem]">
          <div className="flex  gap-[1rem] pt-[10px]">
            <img className="w-[12px] h-[21px] pt-[5px]" src={Rectangle_l} />
            <p className="text-[11px] w-[57px] text-[#999999] font-[600]">
              Previous Room
            </p>
          </div>
          <p className="font-['Cinzel'] font-[700] text-[3rem] pl-[4rem] pr-[4rem] ">
            Choose Room
          </p>
          <div className="flex  gap-[1rem] pt-[10px]">
            <p className="text-[11px] w-[57px] text-[#dcaa2d] font-[600]">
              Next Room
            </p>
            <img className="w-[12px] h-[21px] pt-[5px]" src={Rectangle_r} />
          </div>
        </div>
        <img className="flex absolute" src={im23} />
      </div>

      <div className="flex relative">
        <div className="flex absolute gap-[2rem]  left-[4rem] top-[-5rem]">
          <img className="border-8 border-[#fff4e1]" src={room1} />
          <img className="border-8 border-[#fff4e1]" src={room2} />
          <img className="border-8 border-[#fff4e1]" src={room3} />
        </div>
        <img className="w-[100%]" src={roombg} />
        <img
          className="flex absolute bottom-[2rem] left-[2rem]"
          src={RoomNumber}
        />

        <div className="flex-col absolute right-[2rem] bg-white w-[500px] h-[500px] text-center items-center border-8 border-[#fff4e1] opacity-90 top-[-5rem]">
          <div className="flex-col  w-[100%] ">
            <h2 className="font-['Cinzel'] font-[700] text-[1rem] text-[#d39507]  pt-[2rem]">
              CONVENIENVE AND LUXURY
            </h2>
            <h1 className="text-[#7c4521] font-['Cinzel'] font-[700] text-[2.5rem]  ">
              Royal suite room
            </h1>
            <p className="font-[Roboto] font-[400] w-[100%] pl-[2rem]  pr-[2rem] ">
              Highly spacious two-bedroom suite with a relaxing seating area.
              Featuring piano, a dining area and a complete, filly equipped
              kitchen
            </p>
            <div className="flex gap-[1rem] justify-center pt-[2rem]">
              <img src={Roomicon1} />
              <img src={Roomicon2} />
              <img src={Roomicon3} />
            </div>
          </div>
          <div className="flex border-[#edd9ba] border-4 justify-center ml-[20px] mr-[20px] mt-[2rem] pt-[2rem] pd-[1rem]">
            <div className="flex-col bg-[#ffffff] ">
              <p className="text-[#999999] text-[12px] font-['Roboto']">
                Per Night
              </p>
              <p className="font-['Cinzel'] text-[42px]  text-[#d39507]">
                1200$
              </p>
            </div>
            <button className="bg-[#7c4521] text-white font-[1rem] font-['Roboto'] w-[150px] h-[60px]">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room_Choose;
