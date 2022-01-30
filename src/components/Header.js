import '../styles/main.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header--nav">
        <NavLink className="header--nav__link" to="/rules">
          <button className="header--nav__buton">Reglas</button>
        </NavLink>
        <NavLink className="header--nav__link" to="/pieces">
          <button className="header--nav__buton">Fichas</button>
        </NavLink>
        <NavLink className="header--nav__link" to="/game">
          <button className="header--nav__buton">Juego</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
