import Facebook from '../images/svg/facebook.svg';
import Instagram from '../images/svg/instagram.svg';
import Twitter from '../images/svg/twitter.svg';

const LandingPageFooter = () => {
  return (
    <footer className="bg-[#226c22c9]  footer">
      <section className="flex justify-between ">
        <div className="company ml-5">
          <h2 className="text-white text-3xl mb-2">Company</h2>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Press</a>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">Meet Our Instructors</a>
          </li>
          <li>
            <a href="">Calm Science</a>
          </li>
        </div>
        <div className="offers">
          <h2 className="text-white text-2xl mb-2">Offers</h2>
          <li>
            <a href="">Buy a Gift</a>
          </li>
          <li>
            <a href="">Redeem a Gift</a>
          </li>
          <li>
            <a href="">Family Plan</a>
          </li>
          <li>
            <a href="">Calm Health</a>
          </li>
          <li>
            <a href="">Calm Business</a>
          </li>
        </div>
        <div className="help">
          <h2 className="text-white text-3xl mb-2">Help</h2>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">CCPA Notice</a>
          </li>
          <li>
            <a href="">Accessibility Statement</a>
          </li>
          <li>
            <a href="">Opted Out of Targeted Ads</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
        </div>
        <div className="icons mr-6">
          <a href="">
            <img src={Facebook} alt="Here lies facebook icon" />
          </a>
          <a href="">
            <img src={Instagram} alt="Here lies instagram icon" />
          </a>
          <a href="">
            <img src={Twitter} alt="Here lies Twitter icon" />
          </a>
        </div>
      </section>
        <p className='text-white text-center mt-3'>Copyright bla bla bla</p>
    </footer>
  );
}
export default LandingPageFooter