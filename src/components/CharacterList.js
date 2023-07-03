import CharacterItem from './CharacterItem';
import '../styles/layout/CharacterList.scss';


const CharacterList = ({ characterList, searchByName }) => {
  const htmlList = characterList.filter((eachElement) => eachElement.name.toLowerCase().includes(searchByName.toLowerCase())).map((eachElement) => (
      <li key={eachElement.id} className="characterList__item">
        <CharacterItem eachElement={eachElement} />
      </li>
    ));
  
  return ( 
  <ul className="characterList"> {htmlList}</ul>
  );
};

export default CharacterList;
