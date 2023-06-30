import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
// variables de estado
const [characterList, setCharacterList] = useState([]);

// funciones
useEffect(() => {
  callToApi()
  .then((cleanData) => {
    setCharacterList(cleanData);
  });
}, [])

const renderCharacterList = (characterList) => {
  return characterList.map((eachElement) =>
    (
    <li key={eachElement.id}>
      <img src={eachElement.image} alt={eachElement.name} />
      <h3>{eachElement.name}</h3>
      <p>{eachElement.species}</p>
    </li>)
  );
};
  return (
    <div>
      <ul>
        {renderCharacterList(characterList)}
      </ul>
    </div>
  );
}

export default App;
