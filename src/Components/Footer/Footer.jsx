import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  // Hide CTA only on About page
  const hideCTA =
  location.pathname === "/gallery" ||
  location.pathname === "/features" ||
  location.pathname === "/about" ||
  location.pathname === "/contact";

  return (
    <footer className="footer">

      {/* CTA PART */}
      {/* {!hideCTA && (
        <div className="footer-cta">

          <div>
            <p>READY TO CREATE?</p>

            <h2>
              Make Your Space
              <span> Feel Like Home.</span>
            </h2>
          </div>

          <button className="footer-cta-button">
            Start Designing →
          </button>

        </div>
      )} */}


      {/* MAIN FOOTER */}

      <div className="footer-main">

        {/* Brand */}

        <div className="footer-brand">

          <div className="footer-logo">

            <div className="footer-nestora-mark">
              <span className="footer-mark-left"></span>
              <span className="footer-mark-right"></span>
            </div>

            <span>Nestora</span>

          </div>

          <p>
            Design spaces that inspire,
            comfort and feel uniquely yours.
          </p>

          <div className="footer-socials">

            <a href="#">◎</a>
            <a href="#">P</a>
            <a href="#">f</a>
            <a href="#">in</a>

          </div>

        </div>


        {/* Explore */}

        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#features">Features</a>
          <a href="#about">About Us</a>

        </div>


        {/* Rooms */}

        <div className="footer-column">

          <h3>Rooms</h3>

          <a href="#gallery">Living Room</a>
          <a href="#gallery">Bedroom</a>
          <a href="#gallery">Kitchen</a>
          <a href="#gallery">Home Office</a>

        </div>


        {/* Help */}

        <div className="footer-column">

          <h3>Support</h3>

          <a href="#contact">Contact Us</a>
          <a href="#help">Help Center</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Nestora. All rights reserved.
        </p>

        <p>
          Made with ✦ for beautiful spaces.
        </p>

      </div>

    </footer>
  );
}

export default Footer;