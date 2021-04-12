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
  isSelected: boolean;
}

const TypeOfGameButton: React.FC<TypeOfGameButtonProps> = ({ isSelected, nameButton, backgroundColor, color, borderColor, onClick }) => {
  const data = getDataOfJson();
  let backgroundColorCurrent = backgroundColor;
  let colorCurrent = color;

  useEffect(() => {
    console.log('entrou no useEffect');
    if (isSelected) {
      console.log('entrou no if => ' + nameButton);
      let buble = backgroundColor;
      backgroundColorCurrent = colorCurrent;
      colorCurrent = buble;

    } else {
      console.log('entrou no else => ' + nameButton);
      let backgroundColorCurrent = backgroundColor;
      let colorCurrent = color;
    }

  }, [backgroundColorCurrent, colorCurrent]);



  return (
    <Container onClick={onClick} style={{ backgroundColor: backgroundColorCurrent, borderColor: borderColor }}>
      <ButtonText style={{ color: colorCurrent }}>{nameButton}</ButtonText>
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
