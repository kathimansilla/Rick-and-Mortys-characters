import CharacterItem from './CharacterItem';
import '../styles/layout/CharacterList.scss';


const CharacterList = ({ characterList, searchByName }) => {
  let htmlList;
  
  const filteredCharacter = characterList.filter((eachElement) => eachElement.name.toLowerCase().includes(searchByName.toLowerCase()));

  if (filteredCharacter.length === 0) {
    htmlList =  <p className='backBtn'>No hay ningún personaje que coincida con la palabra {searchByName}</p>
  } else {
    htmlList = filteredCharacter.map((eachElement) => (
      <li key={eachElement.id} className="characterList__item" >
        <CharacterItem eachElement={eachElement} />
      </li>
    ));
  }
  return ( 
  <ul className="characterList"> {htmlList}</ul>
  );
};

export default CharacterList;
