import { css, styled } from 'styled-components';

const responsiveStyles = css`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledSignUpSection = styled.div`
  ${({ borderColor = 'red' }) => css`
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    border: 2px solid ${borderColor};
    border-radius: 20px;
    overflow: hidden;
    margin: auto;
    ${responsiveStyles}
  `}
`;
