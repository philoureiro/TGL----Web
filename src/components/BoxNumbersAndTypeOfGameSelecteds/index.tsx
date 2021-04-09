import React from 'react';
import {
  Container, NumbersText, BoxInternal,
  MarkupBox, TextDataAndPrice, TextNameOfGame
} from './styles';


interface BoxNumbersAndTypeOfGameSelectedsProps {
  numberSelecteds: string;
  dataAndPrice: string;
  nameOfGame: string;
  markupColor: string;

}

const BoxNumbersAndTypeOfGameSelecteds: React.FC<BoxNumbersAndTypeOfGameSelectedsProps> = ({ numberSelecteds,
  dataAndPrice, nameOfGame, markupColor }) => {

  return (
    <Container>
      <MarkupBox style={{ backgroundColor: markupColor }} />
      <BoxInternal>
        <NumbersText>{numberSelecteds}</NumbersText>
        <TextDataAndPrice>{dataAndPrice}</TextDataAndPrice>
        <TextNameOfGame style={{ color: markupColor }}>{nameOfGame}</TextNameOfGame>
      </BoxInternal>
    </Container>
  );
}

export default BoxNumbersAndTypeOfGameSelecteds;
