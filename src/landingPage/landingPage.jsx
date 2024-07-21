import LandingPageBody from "./landingPageBody";
import LandingPageFooter from "./landingPageFooter";

const LandingPage = () => {
  return (
    <>
    <section className="landingSection">
      <div className="mainContainer container mx-auto ">
        <header className='landingHeader'>
          <div className="flex justify-between items-center pt-4 text-[#F9F6EE] ">
            <span className="font-dancingScript text-4xl ml-[1rem]">Clam</span>
            <div className="buttonContainer mr-[1rem]">
              <button>For Business</button>
              <button>Log in</button>
              <button className="border-2 p-2 rounded-2xl hover:bg-black hover:border-2 hover:border-white hover:text-white hover:opacity-60">Try Calm for Free</button>
            </div>
          </div>
        </header>
        <LandingPageBody/>
        

      </div>
      

    
    </section>
    <section>
    <LandingPageFooter/>
    </section>
    </>
  );
}
export default LandingPage