import React from 'react';
import { Container, TextButton } from './styles';

interface GameActionButtonProps {
  nameButton: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
  marginLeft?: string;
  children?: any;

}

const GameActionButton: React.FC<GameActionButtonProps> = ({ nameButton, children, color,
  backgroundColor, borderColor, marginLeft }) => {

  return (
    <Container style={{ backgroundColor: backgroundColor, borderColor: borderColor, marginLeft: marginLeft }}>
      {children}
      <TextButton style={{ color: color }}>{nameButton}</TextButton>
    </Container>
  );
}

export default GameActionButton;
