import '../styles/main.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header--nav">
        <NavLink className="header--nav__link" to="/rules">
          <section className="header--section">Reglas</section>
        </NavLink>
        <NavLink className="header--nav__link" to="/pieces">
          <section className="header--section">Fichas</section>
        </NavLink>
        <NavLink className="header--nav__link" to="/game">
          <section className="header--section">Juego</section>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
