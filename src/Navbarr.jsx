import './Nav.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;