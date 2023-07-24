import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.textcolor};
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 5px;
  cursor: pointer;
  font-family: 'poppins';
  font-size: 24px;
  font-weight: 300;
  box-shadow: 0px 0px 5px #d3d3d3;
  width: 100%;
`;

export const StyledLogo = styled.img`
  margin-right: 10px;
  width: 24px;
`;
