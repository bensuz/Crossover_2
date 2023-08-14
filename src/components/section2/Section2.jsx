import dish1 from "./assets/1.png";
import dish2 from "./assets/2.png";
import dish3 from "./assets/3.png";
import dish4 from "./assets/4.png";
import crone from "./assets/Vector_Smart_Object.png";
import rec from "./assets/Rectangle_743.png";
import cinzel from "./assets/fonts/Cinzel-VariableFont_wght.ttf";
import gothamBook from "./assets/fonts/FontsFree-Net-GothamBook.ttf";

function Section2() {
    return (
        <div className="flex gap-10 h-[790px] max-w-[1240px] py-10 mx-auto bg-[#ffe2a0]">
            <div className="w-1/4 bg-white">
                <div className="h-1/2 bg-[url('components/section2/assets/Layer_832.png')] bg-cover bg-no-repeat"></div>
                <div className=" relative h-[395px] ">
                    <div className="flex flex-col m-10 p-4 bg-white shadow-[0_15px_20px_rgba(217,149,0,0.2)] text-center absolute bottom-0">
                        <div>
                            <img className="m-auto pt-4" src={crone} alt="" />
                            <h3 className="sub-title pt-4">Double Room</h3>
                            <h2 className="title">Standard</h2>
                        </div>
                        <span className="font-gothamBook py-10 px-4">
                            Modern air-conditioned room featuring free WiFi, a
                            flat-screen TV, safe and desk
                        </span>
                        <div className="flex flex-col p-4">
                            <span className="night">per night</span>
                            <span className="price text-center pb-4">
                                1020$
                            </span>
                            <div className="uppercase btn-details text-white flex justify-center items-center">
                                details
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 bg-white bg-[url('components/section2/assets/P.svg')] bg-cover bg-no-repeat">
                <div className="py-10">
                    <h3 className="sub-title">Restaurant menu</h3>
                    <h2 className="title text-center font-['Cinzel'] text-[34px] font-[700] ">
                        Enjoy delicious dishes
                    </h2>
                </div>
                <div>
                    <ul className="flex gap-10 justify-center items-center menu">
                        <li className="menu-item">Starters</li>
                        <li className="menu-item">main menu</li>
                        <li className="menu-item">Desserts</li>
                        <li className="menu-item">drinks</li>
                    </ul>
                </div>
                <div className="p-8 relative">
                    <div className="flex gap-4">
                        <div className="flex w-1/2">
                            <img src={dish1} alt="" />
                            <div className="flex flex-col gap-2">
                                <span className="title pt-4">
                                    Spaghetti Bolognese
                                </span>
                                <span>
                                    Ground beef , onions, celery, carrot, tomato
                                    paste, fresh bay leaves, oregano
                                </span>
                                <span>300g</span>
                            </div>
                        </div>
                        <div className="flex w-1/2">
                            <img src={dish2} alt="" />
                            <div className="flex flex-col gap-2">
                                <span className="title pt-4">
                                    Spaghetti Bolognese
                                </span>
                                <span>
                                    Ground beef , onions, celery, carrot, tomato
                                    paste, fresh bay leaves, oregano
                                </span>
                                <span>300g</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex w-1/2">
                            <img src={dish3} alt="" />
                            <div className="flex flex-col gap-2">
                                <span className="title pt-4">
                                    Spaghetti Bolognese
                                </span>
                                <span>
                                    Ground beef , onions, celery, carrot, tomato
                                    paste, fresh bay leaves, oregano
                                </span>
                                <span>300g</span>
                            </div>
                        </div>
                        <div className="flex w-1/2">
                            <img src={dish4} alt="" />
                            <div className="flex flex-col gap-2">
                                <span className="title pt-4">
                                    Spaghetti Bolognese
                                </span>
                                <span>
                                    Ground beef , onions, celery, carrot, tomato
                                    paste, fresh bay leaves, oregano
                                </span>
                                <span>300g</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center relative">
                    <img className="mt-[-12px]" src={rec} alt="" />
                    <span className="absolute top-[10px]">
                        &#x003C; 3/9 &#x003E;
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Section2;
