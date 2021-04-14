import React from 'react';
import { Container, Text } from './styles';

interface AroundGameButtonProps {
  numberButton: string;
  backgroundColor: string;
  isSelected: boolean;
  currentGame: any;
  onClick: () => void;
}

const AroundGameButton: React.FC<AroundGameButtonProps> = ({ isSelected, onClick, currentGame, numberButton, backgroundColor }) => (

  <Container onClick={onClick} style={{ backgroundColor: isSelected ? currentGame[0].color : backgroundColor }}>
    <Text >{numberButton}</Text>
  </Container>

);





export default AroundGameButton;
