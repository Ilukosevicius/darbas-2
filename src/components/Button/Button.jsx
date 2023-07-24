import React from 'react';

// Styles
import { StyledButton, StyledLogo } from './Button.style';

const Button = ({ logo, textColor, backgroundColor, borderColor }) => {
  return (
    <StyledButton
      textcolor={textColor}
      backgroundcolor={backgroundColor}
      bordercolor={borderColor}
    >
      {logo && <StyledLogo src={logo} />}sign up
    </StyledButton>
  );
};

export default Button;
