import '../styles/main.scss';
import { NavLink } from 'react-router-dom';
const RulesComponent = () => {
  return (
    <main>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <h1 className="title">Reglas del juego</h1>
      <p>
        El juego es muy sencillo. Dispondremos de 6 casillas que representan un
        camino en la zona de carga de la Razor Crest que lleva hasta el armario
        donde se encuentra segura la mercancía. De este modo tendremos 7
        casillas, 6 del camino y una que representa al armario:{' '}
        <p>🔲🔲🔲🔲🔲🔲❎</p>
      </p>
      <p>
        Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar
        el armario. Para ello deberás descargar la mercancía poco a poco. Este
        es el momento más delicado ya que Grogu puede aprovechar y llegar hasta
        el armario. Si eso ocurre se comerá lo que encuentre y Mando perderá la
        oportunidad de saber dónde esta Ahsoka. Ergo, te has quedado sin
        recompensa. Además de esas 7 piezas tendrás tres recipientes donde se
        guarda cada tipo de mercancía. De esta manera quedaría:{' '}
        <p>Recipiente de las galletas:</p>
      </p>
      <p>Tendrá 3 cajas de galletas azules dentro </p>
      <p>Recipiente de los huevos de rana:</p>
      <p>Tendrá dentro 3 huevos de rana (sin fertilizar)</p>
      <p>Recipiente de las ranas:</p> <p>Tendrá dentro 3 ranas</p>
      <p>
        Además de estas piezas tendremos un dado de 4 caras donde cada cara
        representa una de las siguientes acciones:
      </p>
      <p>Descargas una caja de galletas azules 🍪</p>
      <p>Descargas un huevo de rana (con mucho cuidado) 🥚</p>
      <p>Descargas una rana 🐸</p> <p>Grogu se mueve una casilla 👣</p>
      <p>Además habrá una ficha que represente dónde está Grogu.</p>
      <p>
        Ganarás el juego si consigues descargar toda la mercancía. Perderás si
        Grogu llega a la última casilla (el armario).
      </p>
    </main>
  );
};

export default RulesComponent;
