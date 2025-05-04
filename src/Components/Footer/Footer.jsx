import {
  Armchair,
  Banknote,
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom"; // Cambié `react-router` por `react-router-dom`

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              {/* logo wrapper */}
              <div className="logo_wrapper mb-7">
                <Link
                  to="/"
                  className="text-3xl text-gray-400 hover:text-gray-200 font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="2rem" color="#029fae" /> comforty
                </Link>
              </div>

              <p className="text-base text-[#3318e0] font-inter font-normal mb-4 max-w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus repellat vero nulla!
              </p>

              <div className="footer_social flex items-center gap-3">
                <Link to="#" aria-label="Facebook" className="social-icon">
                  <Facebook size="1.5rem" />
                </Link>
                <Link to="#" aria-label="Twitter" className="social-icon">
                  <Twitter size="1.5rem" />
                </Link>
                <Link to="#" aria-label="Instagram" className="social-icon">
                  <Instagram size="1.5rem" />
                </Link>
                <Link to="#" aria-label="Youtube" className="social-icon">
                  <Youtube size="1.5rem" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Category
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="footer-link">Sofa</Link>
                </li>
                <li>
                  <Link className="footer-link">Armchair</Link>
                </li>
                <li>
                  <Link className="footer-link">Wing chair</Link>
                </li>
                <li>
                  <Link className="footer-link">Desk chair</Link>
                </li>
                <li>
                  <Link className="footer-link">Wooden chair</Link>
                </li>
                <li>
                  <Link className="footer-link">Park bench</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Support
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="footer-link">Help & Support</Link>
                </li>
                <li>
                  <Link className="footer-link">Terms & Conditions</Link>
                </li>
                <li>
                  <Link className="footer-link">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="footer-link">Help</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Newsletter
              </h3>
              <form
                action="#"
                className="max-w-[424px] w-full flex items-center gap-2"
              >
                <input
                  type="email"
                  placeholder="Your Email.."
                  className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2"
                  aria-label="Enter your email"
                />
                <button
                  type="submit"
                  className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer transform transition-all duration-300 ease-in-out group hover:bg-[#005a5a] hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_bottom w-full h-[75px] flex items-center justify-center bg-gray-900">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[#9a9caa] font-normal font-inter">
                @ 2025 CO - Web Develop{" "}
                <span className="text-[#3220ab]">Lifeonthecode</span>
              </p>
            </div>
            <div className="flex items-center gap-3.5">
              <p className="flex items-center gap-2 text-[#9a9caa] text-xl hover:text-gray-300">
                Bank Note <Banknote size="2rem" />
              </p>
              <p className="flex items-center gap-2 text-[#9a9caa] text-xl hover:text-gray-300">
                Credit Card <CreditCard size="2rem" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
