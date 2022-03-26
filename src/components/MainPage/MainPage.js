import './body.scss';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <main className="body">
      <h1 className="body--content">Cuidado con Grogu!</h1>
      <NavLink to="/game">
        <button className="button--game">Empezar nueva aventura</button>
      </NavLink>
    </main>
  );
};

export default MainPage;
