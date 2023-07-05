import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetails';
import Footer from './Footer';
import Button from './Button';
import logo from '../images/rm1.png';

function App() {
  // variables de estado
  const [characterList, setCharacterList] = useState(
    ls.get('characterListData', [])
  );
  const [searchByName, setSearchByName] = useState(ls.get('filterName', ''));
  const [searchBySpecie, setSearchBySpecie] = useState(ls.get('filterSpecie', ''));

  // variables
  const headerMain = 'header';
  const headerWhitoutFilter = 'headerWhitoutFilter';
  const bntText =
    "Nobody belongs anywhere, nobody exists on purpose, everybody's going to die. Come check your navigation route!!!";

  // funciones
  useEffect(() => {
    if (ls.get('characterListData', null) === null) {
      callToApi().then((cleanData) => {
        setCharacterList(cleanData);
        cleanData.sort((a, b) => a.name.localeCompare(b.name));
        ls.set('characterListData', cleanData);
      });
    }
  }, []);

  const filteredByName = (value) => {
    setSearchByName(value);
    ls.set('filterName', value);
  };

  const filteredBySpecie = (value) => {
    setSearchBySpecie(value);
    ls.set('filterSpecie', value);
  };

  // información de rutas
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
              <Header headerMain={headerMain} logo={logo}>
                <Filters
                  filteredByName={filteredByName}
                  searchByName={searchByName}
                  searchBySpecie={searchBySpecie}
                  filteredBySpecie={filteredBySpecie}
                />
              </Header>
              <main className="main">
                <CharacterList
                  characterList={characterList}
                  searchByName={searchByName}
                  searchBySpecie={searchBySpecie}
                />
              </main>
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={
            <>
              <Header headerWhitoutFilter={headerWhitoutFilter} logo={logo} />
              <main>
                <CharacterDetail clickedCharacterData={clickedCharacterData} />
              </main>
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Header headerWhitoutFilter={headerWhitoutFilter}logo={logo} />
              <main className="mainError">
                <Button bntText={bntText} />
              </main>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
