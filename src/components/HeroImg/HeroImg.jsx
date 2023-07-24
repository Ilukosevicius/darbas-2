import React from 'react';

// Images
import BrandLogo from '../../Assets/logo.svg';
import Picture from '../../Assets/illustration.svg';

// Styles
import { StyledHeroImg } from './HeroImg.style';

const HeroImg = () => {
  return (
    <StyledHeroImg>
      <img src={BrandLogo} alt="logo" />
      <img src={Picture} alt="illustration" />

      <h2>Start for free & Get Attractive offers Today !</h2>
    </StyledHeroImg>
  );
};

export default HeroImg;
