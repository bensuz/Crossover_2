import "./SectionThree.css";
function SectionThree() {
    return (
        <>
            <div className="flex flex-col  w-[65%] mx-[250px]  bg-white ">
                <div className="head-sec">
                    <div className="container-leftside ">
                        <h3 className="txt"> Statistics </h3>
                        <div className="Innernav">
                            <ul className="flex">
                                <a href="#">REAL </a>
                                <a href="#">PLANNED </a>
                            </ul>
                        </div>
                    </div>

                    <div className="container-rightside">
                        <div className="right">
                            <ul>
                                <a href="#WEEK">WEEK</a>
                                <a href="#MONTH">MONTH</a>
                                <a href="#YEAR">YEAR</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white gap-50">
                    <section className="graph ">
                        <img
                            src="./src/components/SectionThree/Images/Graph.png"
                            alt="Graph"
                        />
                    </section>

                    <section className="sidebar bg-white w-[400px]">
                        <sidebar className="top">
                            <div className="container-1 ">
                                <div>
                                    <img
                                        src="./src/components/SectionThree/Images/Layer_526.png"
                                        alt="room"
                                    />
                                </div>

                                <div>
                                    <h5> STANDART </h5>
                                    <p>Single room with double bed</p>
                                </div>

                                <div>
                                    <p>82 %</p>
                                    <p>2,5%</p>
                                </div>
                            </div>
                        </sidebar>
                        <div className="sidebar-bottom">
                            <div className="container-below">
                                <div>
                                    <img
                                        src="./src/components/SectionThree/Images/Layer_528.png"
                                        alt="img"
                                    />
                                </div>

                                <div>
                                    <h5> FAMILY </h5>
                                    <p>
                                        Two bed rooms room featuring a parlour
                                    </p>
                                </div>

                                <div>
                                    <p>75 %</p>
                                    <p>1.2%</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default SectionThree;
