import logo from "../../assets/logos/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <nav aria-label="secondary">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
        </ul>
      </nav>
      <div>
        <h3>Contact</h3>
        <span>3rd Avenue St. Louis</span>
        <span>+889 889 998 9921</span>
        <span>littlelemon@gmail.com</span>
      </div>
      <div>
        <h3>Follow us!</h3>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
    </footer>
  );
};

export default Footer;
