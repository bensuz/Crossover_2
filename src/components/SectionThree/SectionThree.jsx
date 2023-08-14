import './SectionThree.css';
function SectionThree () {

    return(
     <>
     <div className="head-sec">
        
        <div className="container-leftside ">
        <h3 className = 'txt'> Statistics </h3>
         <div className="Innernav">
        <ul className="flex">
        <a href = "#">REAL </a>
        <a href = "#">PLANNED </a>
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

        <section className="graph">
            <img src="./src/components/SectionThree/Images/Graph.png" alt="Graph" />
            
        </section>

        <section className= "sidebar">
        <sidebar className="top">
            <div className="container-1"> 
            <div>
              <img src="./src/components/SectionThree/Images/Layer_526.png" alt="room" />
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
        </section>
         
 
     </> 
     );}

export default SectionThree;
