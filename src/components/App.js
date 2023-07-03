import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';

function App() {
// variables de estado
const [characterList, setCharacterList] = useState( [] );
const [searchByName, setSearchByName] = useState('');


// funciones
useEffect(() => {
  callToApi()
  .then((cleanData) => {
  setCharacterList(cleanData);  
  console.log(cleanData);
  });
}, [])

const filteredByName = (value) => {
  setSearchByName(value);
};

  return (
    <div className='container'>
        <Header filteredByName={filteredByName} searchByName={searchByName}/>
        <CharacterList characterList={characterList} searchByName={searchByName}/>
        <Footer />
    </div>
  );
}

export default App;
