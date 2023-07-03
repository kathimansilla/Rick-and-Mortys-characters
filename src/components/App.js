import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import CharacterDetail from './CharacterDetails';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';

function App() {
  // variables de estado
  const [characterList, setCharacterList] = useState([]);
  const [searchByName, setSearchByName] = useState('');

  // funciones
  useEffect(() => {
    callToApi().then((cleanData) => {
      setCharacterList(cleanData);
      console.log(cleanData);
    });
  }, []);

  const filteredByName = (value) => {
    setSearchByName(value);
  };

  const handleSelectedCard = (selectedCard) => {
    console.log(selectedCard);
  };

// obtener información de rutas

const {pathname} = useLocation();
const routeData = matchPath('/character/:characterId', pathname);
const characterId = routeData.params.characterId;
console.log(characterId);
// jsx

  return (
    <div className="container">
      <Header filteredByName={filteredByName} searchByName={searchByName} />
      <main>
        <Routes>
          <Route path='/' element={<CharacterList
            characterList={characterList}
            searchByName={searchByName}
            handleSelectedCard={handleSelectedCard}
          />} />
          <Route path='/character/:characterId' element={<CharacterDetail/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
