import styled from 'styled-components';


export const Container = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxInternal = styled.div`
  display: flex;
  height: 100%;
  width: 800px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;

`;

export const MarkupBox = styled.div`
   display: flex;
   height: 180px;
   width: 2%;
   background-color: purple;
   border-radius: 20px;
`;

export const NumbersText = styled.h3`
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
  font-family: helvetica;
  color: #868686;
  font-style: italic;
`;

export const TextDataAndPrice = styled.h3`
  margin-top: -5px;
  margin-left: 20px;
  font-family: helvetica;
  font-weight: normal;
  color: #868686;
  font-size: 20px;
`;



export const ButtonTrash = styled.button`
 margin-left: 20px;
  margin-top:  -30px;
  left: 180px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const TextNameOfGame = styled.h3`
  font-family: helvetica;
 margin-left: 20px;
  margin-top: -10px;
  font-size: 23px;
  font-weight: bold;
  color: #868686;
  font-style: italic;
`;

export const TextData = styled.h3`
  margin-left:  22px;;
  font-family: helvetica;
  font-size: 18px;
  font-weight: normal;
  color: #868686;
  font-style: italic;
`;
