import '../styles/main.scss';
import { NavLink } from 'react-router-dom';

const PiecesComponent = () => {
  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h1 className="title">Fichas</h1>
    </main>
  );
};

export default PiecesComponent;
