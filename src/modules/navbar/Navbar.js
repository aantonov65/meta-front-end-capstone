import logo from "../../assets/logos/Logo.svg";

const Navbar = () => {
  return (
    <nav aria-label="main">
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
