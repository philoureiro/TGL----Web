import React from 'react';
import { Container, InputLabel, Div } from './styles';
import * as Icon from 'react-icons/fa';

interface BoxInputProps {
  children: any;
  label: string;
}

const BoxInput: React.FC<BoxInputProps> = ({ children, label }) => {
  return (
    <Container>
      <Div>
        <InputLabel>{label}</InputLabel>
        {children}
      </Div>
    </Container>
  );
}

export default BoxInput;
