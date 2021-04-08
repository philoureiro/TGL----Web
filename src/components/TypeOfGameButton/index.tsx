import React from 'react';
import { Container, ButtonText } from './styles';

interface TypeOfGameButtonProps {
  nameButton: string;
  backgroundColor: string;
  color: string;
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ nameButton, backgroundColor, color }) => {

  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <ButtonText style={{ color: color }}>{nameButton}</ButtonText>
    </Container>
  );
}

export default TypeOfGameButton;
