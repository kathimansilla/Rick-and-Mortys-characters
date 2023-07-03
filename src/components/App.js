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
import Filter from './Filter';

function App() {
  // variables de estado
  const [characterList, setCharacterList] = useState(
    ls.get('characterListData', [])
  );
  const [searchByName, setSearchByName] = useState('');

  // variables
  const headerMain = 'header';
  const headerWhitoutFilter = 'headerWhitoutFilter';

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

  const { pathname } = useLocation();
  const routeData = matchPath('/character/:characterId', pathname);
  const characterId = parseInt(routeData?.params.characterId);
  const clickedCharacterData = characterList.find(
    (character) => character.id === characterId
  );

  // jsx

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                filteredByName={filteredByName}
                searchByName={searchByName}
                headerMain={headerMain}
              >
                <Filter
                  filteredByName={filteredByName}
                  searchByName={searchByName}
                  headerMain={headerMain}
                />
              </Header>
              <main className="main">
                <CharacterList
                  characterList={characterList}
                  searchByName={searchByName}
                />
              </main>
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={
            <>
              <Header headerWhitoutFilter={headerWhitoutFilter} />
              <CharacterDetail clickedCharacterData={clickedCharacterData} />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
