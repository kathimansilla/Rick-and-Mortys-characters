import { Link } from 'react-router-dom';
import '../styles/layout/CharacterList.scss';

const CharacterDetail = ({ clickedCharacterData }) => {
  if (clickedCharacterData) {
    return (
      <>
        <img
          src={clickedCharacterData.image}
          alt={clickedCharacterData.name}
          className="characterList__item--img"
        />
        <h3 className="characterList__item--name">
          Nombre: {clickedCharacterData.name}
        </h3>
        <p className="characterList__item--text">
          Especie: {clickedCharacterData.species}
        </p>
        <p className="characterList__item--text">
          Origen: {clickedCharacterData.origin}
        </p>
        <p className="characterList__item--text">
          Estado: {clickedCharacterData.status}
        </p>
        <Link to="/">Volver a página principal</Link>
      </>
    );
  } else {
    return (
      <p className="error">Lo sentimos, no hemos encontrado ese personaje</p>
    );
  }
};

export default CharacterDetail;
