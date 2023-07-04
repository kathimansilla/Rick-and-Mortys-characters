import { Link } from 'react-router-dom';
import '../styles/layout/Button.scss';

const Button = ( {bntText} ) => {
  return (
    <Link to="/" className='backBtn'>
      {bntText}
    </Link>
  );
};

export default Button;
