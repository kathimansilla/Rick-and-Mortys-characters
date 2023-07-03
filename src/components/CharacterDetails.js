import { Link } from 'react-router-dom';
import '../styles/layout/CharacterDetail.scss';

const CharacterDetail = ({ clickedCharacterData }) => {
  if (clickedCharacterData !== undefined) {
    return (
      <section className='characterDetail'>
        <div className='characterDetail__item'>
          <img
            src={clickedCharacterData.image}
            alt={clickedCharacterData.name}
            className="characterDetail__item--img"
          />
          <h3 className="characterDetail__item--name">
            Nombre: {clickedCharacterData.name}
          </h3>
          <p className="characterDetail__item--text">
            Especie: {clickedCharacterData.species}
          </p>
          <p className="characterDetail__item--text">
            Origen: {clickedCharacterData.origin}
          </p>
          <p className="characterDetail__item--text">
            Estado: {clickedCharacterData.status}
          </p>
        </div>
        <Link to="/" className='backBtn'>Volver</Link>
      </section>
    );
  } else {
    return (
      <section className='characterDetail'>
      <Link to="/" className='backBtn'>Lo sentimos, no hemos encontrado ese personaje</Link>
      </section>
    );
  }
};

export default CharacterDetail;
