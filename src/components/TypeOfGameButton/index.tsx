import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Container, ButtonText } from './styles';
import { getDataOfJson } from '../../services/api'
import { setArrayAllTypesGameButtonsWasMarked, setJustOneTypeGameButtonWasMarked } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux';
//import { RootState } from '../../store/store'

interface TypeOfGameButtonProps {
  nameButton: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
  onClick: () => void;
  currentGame: any;
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ currentGame, nameButton, backgroundColor, color, borderColor, onClick }) => {
  return (
    <Container onClick={onClick} style={{ backgroundColor: currentGame[0].type === nameButton ? currentGame[0].color : '#fff', borderColor: borderColor }}>
      <ButtonText style={{ color: currentGame[0].type === nameButton ? '#fff' : color }}>{nameButton}</ButtonText>
    </Container>
  );
}

export default TypeOfGameButton;

