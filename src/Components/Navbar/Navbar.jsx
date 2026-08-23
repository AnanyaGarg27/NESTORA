import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            {/* LOGO */}
            <Link to="/" className="logo">

                <div className="nestora-mark">
                    <span className="mark-left"></span>
                    <span className="mark-right"></span>
                </div>

                <span className="logo-text">
                    Nestora
                </span>

            </Link>


            {/* NAVIGATION LINKS */}
            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/gallery">
                    Gallery
                </Link>

                <Link to="/preferences">
                    Preferences
                </Link>

                <Link to="/features">
                    Features
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

                <Link to="/dashboard">
                    Dashboard
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;