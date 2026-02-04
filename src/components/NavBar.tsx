import { useState, useEffect } from 'react';
import Button from './Button';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll sperren, wenn Sidepanel offen
  useEffect(() => {
    document.body.style.overflowY = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="top-row">
          <div className="logo">foodradar</div>

          {/* Desktop Suche */}
          <div className="search desktop">
            <input type="text" placeholder="Neuen Spot suchen" />
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav desktop">
            <ul className="nav-links">
              <li>
                <a href="#">Hilfe & Support</a>
              </li>
              <li>
                <a href="#">Registrieren</a>
              </li>
            </ul>
            <Button color="primary">Anmelden</Button>
          </div>

          {/* Mobile Burger */}
          <button
            className="burger mobile"
            onClick={() => setMenuOpen(true)}
            aria-label="Menü öffnen"
          >
            Menü
          </button>
        </div>

        {/* Mobile Suche */}
        <div className="search mobile">
          <input type="text" placeholder="Neuen Spot suchen" />
        </div>
      </nav>

      {/* Sidepanel + Overlay */}
      <div className="mobile-only">
        <div
          className={`sidepanel-overlay ${menuOpen ? 'visible' : ''}`}
          onClick={() => setMenuOpen(false)}
        ></div>

        <div className={`sidepanel ${menuOpen ? 'open' : ''}`}>
          <button className="close" onClick={() => setMenuOpen(false)}>
            x
          </button>
          <ul className="nav-links">
            <li>
              <a href="#">Registrieren</a>
            </li>
            <li>
              <a href="#">Anmelden</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
