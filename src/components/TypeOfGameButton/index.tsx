import React from 'react';
import { Container, ButtonText } from './styles';

interface TypeOfGameButtonProps {
  nameButton: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ nameButton, backgroundColor, color, borderColor }) => {

  return (
    <Container style={{ backgroundColor: backgroundColor, borderColor: borderColor }}>
      <ButtonText style={{ color: color }}>{nameButton}</ButtonText>
    </Container>
  );
}

export default TypeOfGameButton;
