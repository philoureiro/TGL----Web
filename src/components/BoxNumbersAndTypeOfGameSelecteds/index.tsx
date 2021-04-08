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
        <NumbersText>01, 02, 01, 02, 01, 02, 01, 02, 01, 02, 01, 02, 01, 02, 01, 02, 01, 02, 01, 02,  </NumbersText>
        <TextDataAndPrice>30/11/2020 - (R$ 2,50)</TextDataAndPrice>
        <TextNameOfGame>Lotomania</TextNameOfGame>
      </BoxInternal>
    </Container>
  );
}

export default BoxNumbersAndTypeOfGameSelecteds;
