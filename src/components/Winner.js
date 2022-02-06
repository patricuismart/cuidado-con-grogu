import { NavLink } from 'react-router-dom';
import '../styles/layout/winner.scss';

const Winner = () => {
  return (
    <>
      {/* Expression wonder if there's an state and it is true show this content */}

      <div className="">
        <p className="">¡BIEN, Mando completa la misión, Has ganado!</p>
        <NavLink to="/">
          <button className="button--home">Home</button>
        </NavLink>
      </div>
    </>
  );
};
export default Winner;
