import { Link } from 'react-router-dom';

const CharacterItem = ( {eachElement} ) => {
  return (
    <Link to={'/character/' + eachElement.id}>
      <img src={eachElement.image} alt={eachElement.name} className='characterList__item--img' />
      <h3 className='characterList__item--name'>{eachElement.name}</h3>
      <p className='characterList__item--text'>{eachElement.species}</p>
    </Link >
  );
};

export default CharacterItem;
