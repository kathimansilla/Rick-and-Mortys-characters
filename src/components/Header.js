import heroImg from '../images/rick1.jpeg';
import '../styles/layout/Header.scss';

const Header = ( {children, headerMain, headerWhitoutFilter} ) => {
    return (
        <header className={headerMain + ' ' + headerWhitoutFilter}>
          {children}
          <img className='header__img' src={heroImg} alt="Rick and Morty" />
        </header>
    );
};

export default Header;