import CharacterItem from './CharacterItem';

const CharacterList = ( {characterList} ) => {
  return characterList.map((eachElement) => (
    <li key={eachElement.id}>
      <CharacterItem eachElement={eachElement}/>
    </li>
  ));
};

export default CharacterList;
