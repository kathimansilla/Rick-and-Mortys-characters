const CharacterItem = ( {eachElement} ) => {
  return (
    <>
      <img src={eachElement.image} alt={eachElement.name} className='characterList__item--img' />
      <h3 className='characterList__item--name'>{eachElement.name}</h3>
      <p className='characterList__item--text'>{eachElement.species}</p>
    </>
  );
};

export default CharacterItem;
