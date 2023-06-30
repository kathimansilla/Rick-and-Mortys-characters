const CharacterItem = ( {eachElement} ) => {
  return (
    <>
      <img src={eachElement.image} alt={eachElement.name} />
      <h3>{eachElement.name}</h3>
      <p>{eachElement.species}</p>
    </>
  );
};

export default CharacterItem;
