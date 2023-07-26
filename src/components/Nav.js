import '../styles/Nav.css';

function Nav() {
  return (
    <div className="Nav">
      
        <p id="nav-logo"> A Logo </p>

        <p id="nav-title">
          The Arena
        </p>
        
        <li className="nav-links">
            <ul className="link">Home</ul>
            <ul className="link">About</ul>
            <ul className="link">Articles</ul>
        </li>

    </div>
  );
}

export default Nav;