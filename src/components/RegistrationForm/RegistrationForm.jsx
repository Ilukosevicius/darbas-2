import React from 'react';

// Components
import Button from '../Button/Button';
import Form from '../Form/Form';
// Icons
import FacebookLogo from '../../Assets/FacebookLogo.svg';
import GoogleLogo from '../../Assets/GoogleLogo.svg';

// Styles
import { StyledRegistrationForm } from './RegistrationForm.style';

function RegistrationForm() {
  return (
    <StyledRegistrationForm>
      <div className="form">
        <h1>Get Started</h1>
        <p>Already have an account?</p>
        <a href="#logo">Log In</a>

        <div className="social-media-buttons">
          <Button
            logo={GoogleLogo}
            textColor="#000"
            backgroundColor="white"
            borderColor="#d3d3d3"
          />
          <Button
            logo={FacebookLogo}
            textColor="white"
            backgroundColor="#4f70b5"
            borderColor="#4f70b5"
          />
        </div>
        <h2>Or</h2>
        <Form />
      </div>
    </StyledRegistrationForm>
  );
}

export default RegistrationForm;
