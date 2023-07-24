import { css, styled } from 'styled-components';

const responsiveStyles = css`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const formStyles = css`
  width: 80%;
  margin: auto;

  h1 {
    font-size: 44px;
    font-weight: 500;
    margin-bottom: 0;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    margin: 0;
    font-size: 20px;

    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }

  a {
    text-decoration: none;
    color: #f2877d;
    font-size: 20px;

    @media only screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }

  .social-media-buttons {
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 20px;
    gap: 25px;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: 300;
    margin-bottom: 0;
  }
`;

export const StyledRegistrationForm = styled.div`
  width: 50%;
  font-family: poppins;
  display: flex;
  ${responsiveStyles}

  .form {
    ${formStyles}
  }
`;
