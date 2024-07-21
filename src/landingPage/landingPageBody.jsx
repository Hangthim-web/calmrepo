import Moon from "../images/svg/moon.svg";
import Focus from "../images/svg/focus.svg";
import Self from "../images/svg/self.svg";
import Stress from "../images/svg/stress.svg";
import Sun from "../images/svg/sun.svg";

const LandingPageBody = () => {
  return (
    <section className="container mx-auto ml-[1rem] mt-[4rem]">
      <div className="left-landingPage-container w-[600px]">
        <h2 className="text-white text-5xl mb-[1.3rem]">Find Your Calm</h2>
        <p className="text-white text-2xl">
          Our goal is to improve you health{" "}
          <span className="break-point"> and happiness.</span>
        </p>
        <div className="helpingContent">
          <h2 className="mt-8 text-white text-2xl">
            What can we help with today ?
          </h2>
          <nav className='virtualNavbar'>
            <ul>
              <div className="listPara">
                <a href="" className="flex items-center">
                  <img src={Moon} alt="moon is here" />
                  <span>Improve Sleep Quality</span>
                </a>
              </div>
              <div className="listPara">
                <a href="" className="flex items-center">
                  <img src={Stress} alt="Image could not be loaded" />
                  <span>Reduce Stress or Anxiety</span>
                </a>
              </div>
              <div className="listPara">
                <a href="" className="flex items-center">
                  <img src={Focus} alt="Image could not be loaded" />
                  <span>Improve Focus</span>
                </a>
              </div>
              <div className="listPara">
                <a href="" className="flex items-center">
                  <img src={Self} alt="Image could not be loaded" />
                  <span>Self Improvement</span>
                </a>
              </div>
              <div className="listPara">
                <a href="" className="flex items-center">
                  <img src={Sun} alt="Image could not be loaded" />
                  <span>Something else</span>
                </a>
              </div>
            </ul>
          </nav>

          {/* <Focus/>
           <Moon/>
           <Sun/>
           <Self/>
           <Stress/> */}
        </div>
      </div>
      <aside></aside>
    </section>
  );
};

export default LandingPageBody;
