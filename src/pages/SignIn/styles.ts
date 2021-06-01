import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: #F7F7F7;
  display: flex;
  flex-direction: row;
  border-width: 5px;
  border-color: #EBEBEB;
  border-style: solid;

  @media(max-width: 900px){
    flex-direction:column;
  }
`;

export const BoxTypeOfCard = styled.div`
  margin-left: 100px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 900px){
    margin-top: -100px;
    margin-right: 100px;
  }
`;

export const TextTypeOfCard = styled.h3`
  font-family: helvetica;
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
  height: 30px;
  color: #707070;
`;

export const TextInput = styled.input`
  margin-top: -12px;
  font-size: 30px;
  border: none;
  margin-bottom: 8px;
  outline: none;
`;

export const ButtonRecoveryPassword = styled.button`
  outline: none;
  border: none;
  font-size: 18px;
  font-family: helvetica;
  font-style: italic;
  color: #C1C1C1;
  background-color: transparent;
  margin-left: 150px;
  margin-top: 30px;
  cursor: pointer;
`;

export const ButtonLogin = styled.button`
  outline: none;
  border: none;
  font-size: 40px;
  font-family: helvetica, sans-serif;
  font-style: italic;
  font-weight: bold;
  color: #B5C401;
  background-color: transparent;
  margin-top: 50px;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const BoxIcon = styled.div`
  display: flex;
  height: 40px;
  width: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

`;
