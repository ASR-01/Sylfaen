import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/sales"}>Sales</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <ul>
                <li>
                  {" "}
                  <a>
                    Mira Co-op Housing Society Building No A3, 02 Behind Hotel
                    Amar Palace Mira Bhayandar Thana 401107
                  </a>{" "}
                </li>
              </ul>
            </ul>
          </div>

          
          <div className="footer-col">
            <h4>Find us here</h4>
            <iframe
              className="footer-col_iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1863052734107!2d72.84412937753348!3d19.23071060072491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d70da75639%3A0x2eafc54ea49fe390!2sChandavarkar%20Rd%2C%20Borivali%2C%20Mumbai%2C%20Maharashtra%20400092!5e0!3m2!1sen!2sin!4v1721184702197!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
