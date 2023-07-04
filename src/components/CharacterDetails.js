import '../styles/layout/CharacterDetail.scss';
import Button from './Button';

const CharacterDetail = ({ clickedCharacterData }) => {
  const bntTextError = 'Lo sentimos, no hemos encontrado ese personaje';
  const btnBack = 'Volver';

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
        <Button bntText={btnBack}/>
      </section>
    );
  } else {
    return (
      <section className='characterDetail'>
      <Button bntText={bntTextError}/>
      </section>
    );
  }
};

export default CharacterDetail;
