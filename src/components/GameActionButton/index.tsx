import React from 'react';
import { Container, TextButton } from './styles';

interface GameActionButtonProps {
  nameButton: string;
  children?: any;

}

const GameActionButton: React.FC<GameActionButtonProps> = ({ nameButton, children }) => {

  return (
    <Container>
      {children}
      <TextButton>{nameButton}</TextButton>
    </Container>
  );
}

export default GameActionButton;
