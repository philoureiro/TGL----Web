import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Container, ButtonText } from './styles';
import { getDataOfJson } from '../../services/apiii'
import { useDispatch, useSelector } from 'react-redux';
//import { RootState } from '../../store/store'

interface TypeOfGameButtonProps {
  colorButton: string;
  nameButton: string;
  colorText: string;
  isSelected: boolean;
  onClick: () => void
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ colorButton, nameButton, colorText, isSelected, onClick }) => {

  return (
    <Container onClick={onClick} style={{ backgroundColor: isSelected ? colorButton : '#fff', borderColor: colorButton }}>
      <ButtonText style={{ color: isSelected ? '#fff' : colorText }}>{nameButton}</ButtonText>
    </Container>
  );
}

export default TypeOfGameButton;

