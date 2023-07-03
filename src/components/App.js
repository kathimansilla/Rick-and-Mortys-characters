import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import CharacterDetail from './CharacterDetails';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';
import ls from '../services/localStorage';

function App() {
  // variables de estado
  const [characterList, setCharacterList] = useState(ls.get('characterListData', []));
  const [searchByName, setSearchByName] = useState('');

  // funciones
  useEffect(() => {
    if (ls.get('characterListData', null) === null) {
      callToApi().then((cleanData) => {
        setCharacterList(cleanData);
        ls.set('characterListData', cleanData);
      });
    }
  }, []);

  const filteredByName = (value) => {
    setSearchByName(value);
  };

// obtener información de rutas

const {pathname} = useLocation();
const routeData = matchPath('/character/:characterId', pathname);
const characterId = parseInt(routeData?.params.characterId);
const clickedCharacterData = characterList.find((character) => character.id === characterId);

// jsx

  return (
    <div className='container'>
      <Header filteredByName={filteredByName} searchByName={searchByName} />
      <main className='main'>
        <Routes>
          <Route path='/' element={<CharacterList
            characterList={characterList}
            searchByName={searchByName}
          />} />
          <Route path='/character/:characterId' element={<CharacterDetail clickedCharacterData={clickedCharacterData}/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
