import heroImg from '../images/rick1.jpeg';
import '../styles/layout/Header.scss';

const Header = ( {filteredByName, searchByName, children, headerMain, headerWhitoutFilter} ) => {
    return (
        <section className={headerMain + ' ' + headerWhitoutFilter}>
          {children}
          <img className='header__img' src={heroImg} alt="Rick and Morty" />
        </section>
    );
};

export default Header;