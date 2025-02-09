import { Link } from 'react-router-dom';
import './Button1.css'; 

const STYLES = ['btn--primary', 'btn--outline', 'btn--purple']

const SIZES = ['btn--medium', 'btn--large', 'btn--purple--medium']

export const Buttons = ({ 
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];
  
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
      <Link to={link} className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  };

// export default Button;