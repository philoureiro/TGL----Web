import React from 'react';
import { Container } from './styles';

interface CardProps {
  children: object;
}
const Card: React.FC<CardProps> = ({ children }) => {

  return (
    <Container>
      {children}
    </Container>
  );
}

export default Card;
