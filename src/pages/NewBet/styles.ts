
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  max-height: 100%;
  width: 100vw;
  justify-content: flex-start;
  align-items:  flex-start;
  flex-direction: row;
  background-color: #F7F7F7;
  display: flex;
  flex-direction: row;
  border-width: 5px;
  border-color: #EBEBEB;
  border-style: solid;
`;

export const Text = styled.h3`
  font-size: 24px;

`;

export const BoxNewBet = styled.div`
  margin-left: 150px;
  width: auto;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;
`;

export const BoxNewCart = styled.div`
  margin-left: 50px;
  margin-right: 150px;
  width: 450px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  border-color: #EBEBEB;
  border-width: 5px;
  border-style: solid;
  border-radius: 15px;
`;

export const ButtonLogin = styled.button`
  outline: none;
  border-color: transparent;
  border-top-color: #EBEBEB;
  border-top-width: 5px;
  border-top-style: solid;
  font-size: 40px;
  font-family: helvetica, sans-serif;
  font-style: italic;
  font-weight: bold;
  color: #B5C401;
  background-color: #F4F4F4;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 120px;
  width: 100%;

  &:hover{
        background: ${shade(0.1, '#E2E2E2')};
      }
`;


export const BoxTitle = styled.h3`
  display: flex;
  justify-content:  flex-start;
  align-items: flex-start;
`;

export const TextNewBet = styled.h3`
  font-family: helvetica;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  font-size: 30px;
`;


export const TextTitleCart = styled.h3`
  margin-left: 20px;
  font-family: helvetica;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  font-size: 30px;
`;


TextTitleCart
export const TextFor = styled.h3`
  margin-left: 10px;
  font-family: helvetica;
  font-style: italic;
  font-weight: normal;
  color: #707070;
  font-size: 30px;
`;
export const TextChooseAGame = styled.h3`
  margin-right: 30px;
  font-family: helvetica;
  font-style: italic;
  font-weight: bold;
  color: #868686;
  font-size: 25px;
`;

export const TextDescriptionOfBet = styled.h3`
  margin-top: -10px;
  margin-right: 30px;
  font-family: helvetica;
  font-style: italic;
  font-weight: normal;
  color: #868686;
  font-size: 25px;
`;


export const BoxButtonsTypeOfGame = styled.div`
  display: flex;
  height: 70px;
  justify-content: flex-start;
  align-items:  center;
`;


export const BoxNumberAllButtonsArounds = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 90px));
  gap: 8px;
  max-width: 1400px;
  justify-items: center;
  overflow-x: auto;

`;

export const BoxActionsButtons = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items:  center;
`;

export const BoxIcon = styled.div`
  display: flex;
  height: 40px;
  width: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

`;


export const BoxInternalCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
