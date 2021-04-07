import React from 'react';
import {
  Container, NumbersText, BoxInternal,
  MarkupBox, TextDataAndPrice, TextNameOfGame
} from './styles';


interface BoxNumbersAndTypeOfGameSelectedsProps {

}

const BoxNumbersAndTypeOfGameSelecteds: React.FC<BoxNumbersAndTypeOfGameSelectedsProps> = () => {

  return (
    <Container>
      <MarkupBox />



      <BoxInternal>
        <NumbersText>11, 12,13,14 ,15, , 11, 12,13,14 ,15, 6, 7, 8, 9,10, 11, 12,13,14 ,15, 10, 11, 12,13,14 ,15</NumbersText>
        <TextDataAndPrice>30/11/2020 - (R$ 2,50)</TextDataAndPrice>
        <TextNameOfGame>Lotomania</TextNameOfGame>
      </BoxInternal>
    </Container>
  );
}

export default BoxNumbersAndTypeOfGameSelecteds;
