
import styled from 'styled-components';


export const Container = styled.div`
  min-height: 100vh;
  max-height: 100%;
  width: 100vw;
  justify-content: flex-start;
  align-items:  flex-start;
  flex-direction: row;
  background-color: #F7F7F7;
  display: flex;
  flex-direction: column;
  border-width: 5px;
  border-color: #EBEBEB;
  border-style: solid;


  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    }
  `;

export const BoxRecentGames = styled.div`
  margin-top: 150px;
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media(max-width: 900px){
    flex-direction: column;
    margin-bottom: 150px;
    margin-top: 300px;
  }
`;

export const TextRecentGames = styled.h3`
  font-family: helvetica;
  font-style: italic;
  font-weight: bold;
  color: #707070;
  font-size: 38px;
  margin-left: 10px;
`;

export const TextDataAndPrice = styled.h3`
  margin-left: 50px;
  margin-right: 30px;
  font-family: helvetica;
  font-style: italic;
  font-weight: normal;
  color: #868686;
  font-size: 23px;

  @media(max-width: 900px){
    font-size: 30px;
  }
`;

export const ButtonNewBet = styled.button`
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-family: helvetica;
  color: #B5C401;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;


  @media (max-width: 900px){
    font-size: 40px;
    margin-bottom: 130px;
  }
`;


export const BoxIcon = styled.div`
  display: flex;
  height: 40px;
  width: 50px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
export const DivAllGamesRecents = styled.div`
  margin-left: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxInternalCart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const BoxButtonsTypeOfGame = styled.div`
  display: flex;
  height: 100px;
  width: auto;
  justify-content: flex-start;
  align-items:  center;
  overflow-x: auto;


  @media (max-width: 900px){
    height: 800px;
    width: 550px;
    overflow-x: visible;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
