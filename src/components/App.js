import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';

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


  return (
    <div>
      <ul className='characterList'>
        <CharacterList characterList={characterList}/>
      </ul>
    </div>
  );
}

export default App;
