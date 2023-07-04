import '../styles/layout/CharacterDetail.scss';
import Button from './Button';

const CharacterDetail = ({ clickedCharacterData }) => {
  const bntTextError = 'Lo sentimos, no hemos encontrado ese personaje';
  const btnBack = 'Volver';

  const getStatus = () => {
    if (clickedCharacterData.status === 'Alive') {
      return (<p className="characterDetail__item--text">
        <i className="fa-solid fa-heart-pulse"></i></p>);
    } else {
      return (<p className="characterDetail__item--text">
        <i className="fa-regular fa-face-dizzy"></i></p>);
    }
  };

  const getSpecie = () => {
    if (clickedCharacterData.species === 'Human') {
      return (<p className="characterDetail__item--text">
      Especie: <i className="fa-solid fa-person"></i>
    </p>);
    } else {
      return (<p className="characterDetail__item--text">
        Especie: <i className="fa-brands fa-reddit-alien"></i></p>);
    }
  };

  const getOrigin = () => {
    if (clickedCharacterData.origin === 'unknown') {
      return (<p className="characterDetail__item--text">
      Origen: desconocido
    </p>);
    } else {
      return (<p className="characterDetail__item--text">
      Origen: {clickedCharacterData.origin}
    </p>);
    }
  };

  if (clickedCharacterData !== undefined) {
    return (
      <section className="characterDetail">
        <div className="characterDetail__item">
          <img
            src={clickedCharacterData.image}
            alt={clickedCharacterData.name}
            className="characterDetail__item--img"
          />
          <h3 className="characterDetail__item--name">
            Nombre: {clickedCharacterData.name}
          </h3>
          {getSpecie()}
          {getOrigin()}
          {getStatus()}
        </div>
        <Button bntText={btnBack} />
      </section>
    );
  } else {
    return (
      <section className="characterDetail">
        <Button bntText={bntTextError} />
      </section>
    );
  }
};

export default CharacterDetail;
