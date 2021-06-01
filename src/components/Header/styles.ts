import styled from 'styled-components';


export const Container = styled.div`
  height: 70px;
  width: 100vw;
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const ButtonAccount = styled.button`
  margin-left: 47vw;
  margin-right: 40vw;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-family: helvetica;
  color: #707070;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (max-width:900px ){
    margin-left: 24vw;
  }
`;

export const BoxLogo = styled.div`
  margin-left: 10vw;
  height: 80px;
  width: 80px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;


export const TextLogo = styled.h3`
  margin-top: 10px;
  font-size: 50px;
  font-weight: bold;
  font-family: helvetica;
  font-style: italic;
  color: #707070;
`;

export const MarkupLogo = styled.div`
    margin-top: -48px;
   height: 9px;
   width: 120px;
   border-radius: 15px;
   background-color: #B5C401;
`;

export const ButtonLogout = styled.button`
  margin-left: -35vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-family: helvetica;
  color: #707070;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

`;

export const BoxIcon = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
