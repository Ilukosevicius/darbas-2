import React from 'react';

// Components
import HeroImg from '../HeroImg/HeroImg';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

// Styles
import { StyledSignUpSection } from './SignUpSection.style';

const SignUpSection = () => {
  return (
    <StyledSignUpSection>
      <HeroImg />
      <RegistrationForm />
    </StyledSignUpSection>
  );
};

export default SignUpSection;
