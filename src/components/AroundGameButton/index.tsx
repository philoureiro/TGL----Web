import React from 'react';
import { Container, Text } from './styles';

interface AroundGameButtonProps {
  numberButton: string;
  backgroundColor: string;
}

const AroundGameButton: React.FC<AroundGameButtonProps> = ({ numberButton, backgroundColor }) => {

  return (
    <Container style={{ backgroundColor: backgroundColor }}>
      <Text>{numberButton}</Text>
    </Container>
  );
}

export default AroundGameButton;
