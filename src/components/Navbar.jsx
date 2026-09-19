import { useState } from "react";

function Navbar({ activePage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* Hamburger - only on mobile */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <a href="/" className="logo" onClick={closeMenu}>
                    SHAKE<span>WEB</span>
                </a>

                <div className="nav-links">
                    <a href="/" className={activePage === "home" ? "active" : ""}>Home</a>
                    <a href="/services" className={activePage === "services" ? "active" : ""}>Services</a>
                    <a href="/projects" className={activePage === "projects" ? "active" : ""}>Projects</a>
                    <a href="/pricing" className={activePage === "pricing" ? "active" : ""}>Pricing</a>
                    <a href="/about" className={activePage === "about" ? "active" : ""}>About</a>
                    <a href="/contact" className={activePage === "contact" ? "active" : ""}>Contact</a>
                </div>

                <a
                    href="https://wa.me/254758184039"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-button"
                >
                    Get Started
                </a>
            </div>

            {/* Mobile dropdown */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a href="/" className={activePage === "home" ? "active" : ""} onClick={closeMenu}>Home</a>
                <a href="/services" className={activePage === "services" ? "active" : ""} onClick={closeMenu}>Services</a>
                <a href="/projects" className={activePage === "projects" ? "active" : ""} onClick={closeMenu}>Projects</a>
                <a href="/pricing" className={activePage === "pricing" ? "active" : ""} onClick={closeMenu}>Pricing</a>
                <a href="/about" className={activePage === "about" ? "active" : ""} onClick={closeMenu}>About</a>
                <a href="/contact" className={activePage === "contact" ? "active" : ""} onClick={closeMenu}>Contact</a>

                <a
                    href="https://wa.me/254758184039"
                    target="_blank"
                    rel="noreferrer"
                    className="mobile-cta"
                    onClick={closeMenu}
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
}

export default Navbar;