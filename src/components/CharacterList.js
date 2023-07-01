import CharacterItem from './CharacterItem';
import '../styles/layout/CharacterList.scss';

const CharacterList = ({ characterList }) => {
  const htmlList = characterList.map((eachElement) => (
    <li key={eachElement.id} className="characterList__item">
      <CharacterItem eachElement={eachElement} />
    </li>
  ));

  return ( 
  <ul className="characterList"> {htmlList}</ul>
  );
};

export default CharacterList;
