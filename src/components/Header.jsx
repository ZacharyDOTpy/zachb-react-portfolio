import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <header>
      <h1>Zach Brewer</h1>
      <ul>
        <li>< Link className={location.pathname==="/" && "active"}to="/">About</Link></li>
        <li>< Link className={location.pathname==="/portfolio" && "active"}to="/portfolio">Portfolio</Link></li>
        <li>< Link className={location.pathname==="/contact" && "active"}to="/contact">Contact</Link></li>
        <li>< Link className={location.pathname==="/resume" && "active"}to="/resume">Resume</Link></li>
      </ul>
    </header>
  );
}

export default Header;