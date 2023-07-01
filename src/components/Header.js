import heroImg from '../images/rick1.jpeg';
import '../styles/layout/Header.scss';

const Header = () => {
    return (
        <section className='header'>
          <img className='header__img' src={heroImg} alt="Rick and Morty" />
        </section>
    );
};

export default Header;