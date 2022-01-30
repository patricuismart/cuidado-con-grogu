import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
const RulesComponent = () => {
  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h1 className="title">Reglas del juego</h1>
      El juego es muy sencillo. Dispondremos de 6 casillas que representan un
      camino en la zona de carga de la Razor Crest que lleva hasta el armario
      donde se encuentra segura la mercancía. De este modo tendremos 7 casillas,
      6 del camino y una que representa al armario: 🔲🔲🔲🔲🔲🔲❎ Durante el
      viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario.
      Para ello deberás descargar la mercancía poco a poco. Este es el momento
      más delicado ya que Grogu puede aprovechar y llegar hasta el armario. Si
      eso ocurre se comerá lo que encuentre y Mando perderá la oportunidad de
      saber dónde esta Ahsoka. Ergo, te has quedado sin recompensa. Además de
      esas 7 piezas tendrás tres recipientes donde se guarda cada tipo de
      mercancía. De esta manera quedaría: Recipiente de las galletas: Tendrá 3
      cajas de galletas azules dentro Recipiente de los huevos de rana: Tendrá
      dentro 3 huevos de rana (sin fertilizar) Recipiente de las ranas: Tendrá
      dentro 3 ranas Además de estas piezas tendremos un dado de 4 caras donde
      cada cara representa una de las siguientes acciones: Descargas una caja de
      galletas azules 🍪 Descargas un huevo de rana (con mucho cuidado) 🥚
      Descargas una rana 🐸 Grogu se mueve una casilla 👣 Además habrá una ficha
      que represente dónde está Grogu. Ganarás el juego si consigues descargar
      toda la mercancía. Perderás si Grogu llega a la última casilla (el
      armario). Fichas ficha de zona de carga (x6) ficha de armario (x1) ficha
      de recipiente (x3) cajas de galletas (x3) ranas (x3) huevos de rana (x3)
      dado (x1) grogu (x1) Ejemplo de una partida A continuación podrás ver una
      simulación de partida cuya intención es la de ilustrar el funcionamiento
      del juego . Colocación de piezas en el tablero: Fichas: G: Grogu [ ]:
      Ficha de zona de carga ( ): Ficha de armario [ 3, 3, 3 ]: Cargamento con 3
      cajas de galletas, 3 ranas, 3 huevos de rana Tablero: G [ ][ ][ ][ ][ ][
      ]([ 3, 3, 3 ])Partida Lanzamiento de dado: L1. Dado: “rana” G [ ][ ][ ][
      ][ ][ ]([ 3, 2, 3 ]) L2. Dado: “Grogu” [G][ ][ ][ ][ ][ ]([ 3, 2, 3 ]) L3.
      Dado: “Grogu” [ ][G][ ][ ][ ][ ]([ 3, 2, 3 ]) L4. Dado: “Galleta” [ ][G][
      ][ ][ ][ ]([ 2, 2, 3 ]) L5. Dado: “Galleta” [ ][G][ ][ ][ ][ ]([ 1, 2, 3
      ]) L6. Dado: “Galleta” [ ][G][ ][ ][ ][ ]([ 0, 2, 3 ]) L7. Dado: “Huevo” [
      ][G][ ][ ][ ][ ]([ 0, 2, 2 ]) L8. Dado: “Huevo” [ ][G][ ][ ][ ][ ]([ 0, 2,
      1 ]) L9. Dado: “Grogu” [ ][ ][G][ ][ ][ ]([ 0, 2, 1 ]) L10. Dado: “Grogu”
      [ ][ ][ ][G][ ][ ]([ 0, 2, 1 ]) L11. Dado: “Galleta” [ ][ ][ ][G][ ][ ]([
      0, 2, 1 ]) L12. Dado: “Rana” [ ][ ][ ][G][ ][ ]([ 0, 1, 1 ]) L13. Dado:
      “Galleta” [ ][ ][ ][G][ ][ ]([ 0, 1, 1 ]) L14. Dado: “Grogu” [ ][ ][ ][
      ][G][ ]([ 0, 1, 1 ]) L15. Dado: “Huevo” [ ][ ][ ][ ][G][ ]([ 0, 1, 0 ])
      L16. Dado: “Grogu” [ ][ ][ ][ ][ ][G]([ 0, 1, 0 ]) L17. Dado: “Grogu” [ ][
      ][ ][ ][ ][ ]([G])
    </main>
  );
};

export default RulesComponent;
