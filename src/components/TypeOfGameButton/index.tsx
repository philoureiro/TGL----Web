import React, { useCallback, useState, useEffect } from 'react';
import { Container, ButtonText } from './styles';
import { getDataOfJson } from '../../services/api'
import { setArrayAllTypesGameButtonsWasMarked, setJustOneTypeGameButtonWasMarked } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store'

interface TypeOfGameButtonProps {
  nameButton: string;
  backgroundColor: string;
  color: string;
  borderColor: string;
  allowsMoreThanOneselection: boolean;
  onClick: () => void;
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ nameButton, backgroundColor, color, borderColor, onClick, allowsMoreThanOneselection }) => {
  const data = getDataOfJson();



  return (
    <Container onClick={onClick} style={{ backgroundColor: backgroundColor, borderColor: borderColor }}>
      <ButtonText style={{ color: color }}>{nameButton}</ButtonText>
    </Container>
  );
}

export default TypeOfGameButton;


/*
   const changeColorButton = useEffect(() => {
     let arrayOfButtonsSelecteds = [];
     let buble = '';
   }, [backgroundColorCurrent, colorCurrent]);


   const handleClickButton = useCallback(() => {
     let arrayOfButtonsSelecteds = [];
     if (allowsMoreThanOneselection) {
       //!dataAllButtons.includes(nameButton) ?




       console.log('Retorno do redux => all');
     } else {

       console.log('Retorno do redux => just one');
       // console.log(dataNameOfSelectedButton);

     }
   }, []);

 */
