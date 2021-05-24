import React from 'react';
import {
  Container, NumbersText, BoxInternal,
  MarkupBox, TextData, ButtonTrash, TextNameOfGame
} from './styles';

import * as Icon from 'react-icons/fa';

interface BoxNumbersAndTypeOfGameSelectedsProps {
  numbersSelecteds: string;
  price: string;
  date: string;
  type: string;
  hasIconTrash: boolean;
  onClick: () => void;
  color: string;
}



const BoxNumbersAndTypeOfGameSelecteds: React.FC<BoxNumbersAndTypeOfGameSelectedsProps> = ({ numbersSelecteds, color, hasIconTrash,
  price, date, type, onClick }) => {

  return (
    <Container>
      <MarkupBox style={{ backgroundColor: color, marginRight: '10px' }} />
      <BoxInternal>
        <NumbersText>{numbersSelecteds}</NumbersText>
        <TextData>{`${date} - ${price}`}</TextData>

        {
          hasIconTrash
            ?
            <ButtonTrash onClick={onClick}>
              <Icon.FaTrash size={30} color={'black'} ></Icon.FaTrash>
            </ButtonTrash>
            : null
        }


        <TextNameOfGame>{type}</TextNameOfGame>

      </BoxInternal>
    </Container>
  );
}

export default BoxNumbersAndTypeOfGameSelecteds;
