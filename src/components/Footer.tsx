import pkg from '../../package.json';

function Footer() {
  const version = (pkg as any)?.version ?? '0.0.0';

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Version {version} — © {new Date().getFullYear()} FoodRadar Demo
          <a href="#changelog" className="footer-link" aria-label="Changelog anzeigen">
            Changelog
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
