import '../styles/main.scss';
import { NavLink } from 'react-router-dom';

const PiecesComponent = () => {
  return (
    <main className="text">
      <NavLink to="/">
        <button className="button-home">Home</button>
      </NavLink>
      <h1 className="title">Fichas</h1>
      <div className="text">
        <p className="title">Ficha de zona de carga (x6)</p>
        <p>ficha de armario (x1) </p>
        <p>ficha de recipiente (x3)</p> <p>cajas de galletas (x3)</p>
        <p>ranas (x3)</p>
        <p>huevos de rana (x3)</p>
        <p> dado (x1)</p> <p>grogu (x1)</p>
        <h2> Ejemplo de una partida</h2>
        <p>
          A continuación podrás ver una simulación de partida cuya intención es
          la de ilustrar el funcionamiento del juego .
        </p>
        <h2>Colocación de piezas en el tablero:</h2> <h2>Fichas:</h2>
        <p>G: Grogu</p> <p>[ ]: Ficha de zona de carga </p>
        <p>( ): Ficha de armario</p>
        <p>
          [ 3, 3, 3 ]: Cargamento con 3 cajas de galletas, 3 ranas, 3 huevos de
          rana
        </p>
        <p>Tablero: G [ ][ ][ ][ ][ ][ ]([ 3, 3, 3 ])</p>
        Partida Lanzamiento de dado: L1.{' '}
        <p>Dado: “rana” G [ ][ ][ ][ ][ ][ ]([ 3, 2, 3 ])</p>
        <p>L2. Dado: “Grogu” [G][ ][ ][ ][ ][ ]([ 3, 2, 3 ])</p>{' '}
        <p>L3. Dado: “Grogu” [ ][G][ ][ ][ ][ ]([ 3, 2, 3 ])</p>{' '}
        <p>L4. Dado: “Galleta” [ ][G][ ][ ][ ][ ]([ 2, 2, 3 ])</p>{' '}
        <p>L5. Dado: “Galleta” [ ][G][ ][ ][ ][ ]([ 1, 2, 3 ])</p>{' '}
        <p>L6. Dado: “Galleta” [ ][G][ ][ ][ ][ ]([ 0, 2, 3 ])</p>{' '}
        <p>L7. Dado: “Huevo” [ ][G][ ][ ][ ][ ]([ 0, 2, 2 ])</p>
        <p>L8. Dado: “Huevo” [ ][G][ ][ ][ ][ ]([ 0, 2, 1 ])</p>
        <p>L9. Dado: “Grogu” [ ][ ][G][ ][ ][ ]([ 0, 2, 1 ])</p>{' '}
        <p>L10. Dado: “Grogu” [ ][ ][ ][G][ ][ ]([ 0, 2, 1 ])</p>{' '}
        <p>L11. Dado: “Galleta” [ ][ ][ ][G][ ][ ]([ 0, 2, 1 ])</p>
        <p>L12. Dado: “Rana” [ ][ ][ ][G][ ][ ]([ 0, 1, 1 ])</p>
        <p>L13. Dado: “Galleta” [ ][ ][ ][G][ ][ ]([ 0, 1, 1 ])</p>
        <p>L14. Dado: “Grogu” [ ][ ][ ][ ][G][ ]([ 0, 1, 1 ])</p>
        <p>L15. Dado: “Huevo” [ ][ ][ ][ ][G][ ]([ 0, 1, 0 ])</p>
        <p>L16. Dado: “Grogu” [ ][ ][ ][ ][ ][G]([ 0, 1, 0 ])</p>
        <p>L17. Dado: “Grogu” [ ][ ][ ][ ][ ][ ]([G])</p>
      </div>
    </main>
  );
};

export default PiecesComponent;
