import '../styles/Nav.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      
        <p id="nav-logo"> A Logo </p>

        <p id="nav-title">
          The Arena
        </p>
        
        <li className="nav-links">
            <ul className="link">
              <Link to="/">Home</Link>
            </ul>
            <ul className="link">
            <Link to="/about">About</Link>
            </ul>
            <ul className="link">
            <Link to="/articles">Articles</Link>
            </ul>
        </li>

    </div>
  );
}

export default Nav;