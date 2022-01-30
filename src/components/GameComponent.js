import '../styles/main.scss';
import { NavLink } from 'react-router-dom';

const GameComponent = () => {
  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h1 className="title">Juego</h1>
    </main>
  );
};

export default GameComponent;
