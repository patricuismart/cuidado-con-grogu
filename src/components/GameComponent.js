import '../styles/main.scss';
import { NavLink } from 'react-router-dom';

const GameComponent = () => {
  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h1 className="title">Juego</h1>
      <input className="dice__btn " type="submit" value="Dado" />
      <input
        readOnly
        type="text"
        id="clue"
        className="form__number"
        value="User Messaje"
      />

      <p>Número de intentos:;</p>
      <p>Numbero obtenido</p>
    </main>
  );
};

export default GameComponent;
