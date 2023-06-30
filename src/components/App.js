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

const renderCharacterList = (objList) => {
  objList.map((eachElement) => {
    return (
    <li>
      <img src={eachElement.image} alt={eachElement.name} />
      <h3>{eachElement.name}</h3>
      <p>{eachElement.species}</p>
    </li>)
  });
};
  return (
    <div>
      <h1>Hola</h1>
      <ul>
        {renderCharacterList(characterList)}
      </ul>
    </div>
  );
}

export default App;
