import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';

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
    <div className='container'>
        <Header />
        <CharacterList characterList={characterList}/>
        <Footer />
    </div>
  );
}

export default App;
