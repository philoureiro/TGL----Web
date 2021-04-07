import React from 'react';
import { Container, ButtonText } from './styles';

interface TypeOfGameButtonProps {
  nameButton: string;
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ nameButton }) => {

  return (
    <Container>
      <ButtonText>{nameButton}</ButtonText>
    </Container>
  );
}

export default TypeOfGameButton;
