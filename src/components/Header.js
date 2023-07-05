import heroImg from '../images/rick3.jpeg';
import '../styles/layout/Header.scss';

const Header = ( {children, headerMain, headerWhitoutFilter, logo} ) => {
    return (
        <header className={headerMain + ' ' + headerWhitoutFilter}>
          <div className='containerFilters'>
          <img className='header__img' src={heroImg} alt="Rick and Morty" />
          {children}
          </div>
          <img className='header__logo' src={logo} alt="logo de Rick and Morty" />
        </header>
    );
};

export default Header;