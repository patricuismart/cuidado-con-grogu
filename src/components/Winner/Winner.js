import { NavLink } from 'react-router-dom';
import './winner.scss';
import mandoWins from '../../images/mandoWins.gif';

const Winner = ({ handleReset }) => {
  return (
    <>
      <div className="modal">
        <NavLink to="/game">
          <i onClick={handleReset} className="fas fa-times-circle icon"></i>
        </NavLink>
        <img className="gif" alt="You Win" src={mandoWins} />
        <p className="text">¡BIEN, Mando completa la misión, Has ganado!</p>
        <NavLink to="/">
          <button className="button-home">Home</button>
        </NavLink>
      </div>
    </>
  );
};
export default Winner;
