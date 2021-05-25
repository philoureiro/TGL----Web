import React from 'react';
import { Container, Text } from './styles';

interface AroundGameButtonProps {
  numberButton: number;
  isSelected: boolean;
  color: string;
  onClick: () => void;
}

const AroundGameButton: React.FC<AroundGameButtonProps> = ({
  numberButton,
  color,
  isSelected,
  onClick }) => (

  <Container onClick={onClick} style={{ backgroundColor: isSelected ? color : '#C1C1C1' }}>
    <Text >{numberButton}</Text>
  </Container>

);





export default AroundGameButton;
