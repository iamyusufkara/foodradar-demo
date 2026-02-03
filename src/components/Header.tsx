import Button from './Button';

const Header = () => {
  return (
    <header className="header">
      <h3>foodradar</h3>
      <input type="text" placeholder="Neuen Spot suchen" />
      <Button color="primary">Anmelden</Button>
    </header>
  );
};

export default Header;
