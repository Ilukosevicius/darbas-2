import { css, styled } from 'styled-components';

const imgStyles = css`
  padding: 0 50px;

  @media only screen and (max-width: 1024px) {
    padding: 0 10px;
  }

  &:first-child {
    width: 30%;
    padding: 30px;
  }
`;

const h2Styles = css`
  text-align: center;
  color: white;
  width: 50%;
  margin: auto;
  font-family: poppins;
  font-weight: 400;
  padding: 20px;
  margin-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    width: 30%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledHeroImg = styled.div`
  background-color: #f2877d;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 25px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }

  img {
    ${imgStyles}
  }

  h2 {
    ${h2Styles}
  }
`;
