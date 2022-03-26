import { NavLink } from 'react-router-dom';
import './gameover.scss';
import GroguGameover from '../images/GroguGameover.gif';

const Gameover = ({ handleReset }) => {
  return (
    <>
      <div className="modal-gameover">
        <NavLink to="/game">
          <i onClick={handleReset} className="fas fa-times-circle icon"></i>
        </NavLink>
        <img className="gif" alt="Gameover" src={GroguGameover} />
        <p className="text">
          ¡OMG, Grogu se ha comido todo, Vuelve a intentarlo!
        </p>
        <NavLink to="/">
          <button className="button-home">Home</button>
        </NavLink>
      </div>
    </>
  );
};
export default Gameover;
