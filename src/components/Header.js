import heroImg from '../images/rick1.jpeg';
import '../styles/layout/Header.scss';
import Filter from './Filter';

const Header = ( {filteredByName, searchByName} ) => {
    return (
        <section className='header'>
          <Filter filteredByName={filteredByName} searchByName={searchByName}/>
          <img className='header__img' src={heroImg} alt="Rick and Morty" />
        </section>
    );
};

export default Header;