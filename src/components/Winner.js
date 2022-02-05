import { NavLink } from 'react-router-dom';
import '../styles/layout/winner.scss';

const Winner = (stateWinner, setStatestateWinner) => {
  return (
    <>
      {/* Expression wonder if there's an state and it is true show this content */}
      {stateWinner && (
        <div className="">
          <p className="">¡BIEN, Mando completa la misión, Has ganado!</p>
          <NavLink to="/">
            <button className="buton--home">Home</button>
          </NavLink>
        </div>
      )}
    </>
  );
};
export default Winner;
