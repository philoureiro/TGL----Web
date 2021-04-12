import React, { useEffect, useCallback, useState } from 'react';
import {
  Container, BoxNewBet, TextNewBet, TextChooseAGame, BoxNumberAllButtonsArounds, BoxIcon,
  BoxNewCart, TextFor, BoxTitle, BoxButtonsTypeOfGame, TextDescriptionOfBet, BoxActionsButtons,
  ButtonLogin, TextTitleCart, BoxInternalCart, BoxDescription
} from './styles';
import { getDataOfJson } from '../../services/api'
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';
import TypeOfGameButton from '../../components/TypeOfGameButton';
import GameActionButton from '../../components/GameActionButton';
import AroundGameButton from '../../components/AroundGameButton';
import BoxNumbersAndTypeOfGameSelecteds from '../../components/BoxNumbersAndTypeOfGameSelecteds';
import Cart from '../../components/Cart';
import * as Icon from 'react-icons/fa';

import { setJustOneTypeGameButtonWasMarked } from '../../store/actions';

import { useSelector, useDispatch } from 'react-redux';
import { type } from 'node:os';
interface NewBetProps {

}
interface DataProps {
  types: [{
    type: string,
    description: string;
    range: number,
    price: number,
    'max-number': number,
    color: string,
    'min-cart-value': number,
  }]
}

const NewBet: React.FC<NewBetProps> = () => {
  const data = getDataOfJson();
  const [numbersSelecteds, setNumbersSelected] = useState(Array.prototype);
  const [typeOfGameSelecteds, setTypeOfGamesSelected] = useState(String);

  const handleClickButtonTypeGame = useCallback((button) => {
    setTypeOfGamesSelected(button);
  }, []);

  const isSelected = useCallback((nameButton) => {

    return true;
  }, []);


  const returnButtonsOfTypeGame = useCallback(() => {
    let arrayOfButtons: any = [];

    data.map((e: { type: string, color: string }, i: number) => {
      arrayOfButtons.push(
        <TypeOfGameButton onClick={() => handleClickButtonTypeGame(e.type)} key={i + 1} backgroundColor={'#fff'}
          isSelected={isSelected(e.type)} borderColor={e.color} color={e.color} nameButton={e.type} ></TypeOfGameButton >
      );
    })

    return arrayOfButtons;
  }, []);


  const returnAroundButtons = useCallback((typeButton) => {
    let indice = 0;
    data.forEach((element, i) => {
      element.type === typeButton ? indice = i : null
    });

    let aux = 0;
    let arrayOfButtons = [];

    while (aux < data[indice].range) {
      arrayOfButtons.push(
        <AroundGameButton key={aux + 1} backgroundColor={data[indice].color} numberButton={`${aux + 1}`}></AroundGameButton>
      );
      aux++;
    }
    return arrayOfButtons;
  }, []);

  const returnDescriptionOfBet = useCallback((indice) => {
    return data[indice].description;
  }, []);

  return (
    <>
      <Header />
      <Container>
        <BoxNewBet>
          <BoxTitle>
            <TextNewBet>NEW BET</TextNewBet>
            <TextFor>FOR MEGA-SENA</TextFor>
          </BoxTitle>
          <BoxTitle>
            <TextChooseAGame>Choose a game</TextChooseAGame>
          </BoxTitle>

          <BoxButtonsTypeOfGame>{returnButtonsOfTypeGame()}</BoxButtonsTypeOfGame>

          <BoxDescription>
            <TextChooseAGame>Fill your bet</TextChooseAGame>
            <TextDescriptionOfBet>{returnDescriptionOfBet(2)}</TextDescriptionOfBet>
          </BoxDescription>

          <BoxNumberAllButtonsArounds>{returnAroundButtons(typeOfGameSelecteds)}</BoxNumberAllButtonsArounds>

          <BoxActionsButtons>
            <GameActionButton backgroundColor={'#fff'} color={'#01AC66'} borderColor={'#01AC66'} nameButton={'Complete game'}></GameActionButton>
            <GameActionButton backgroundColor={'#fff'} color={'#01AC66'} borderColor={'#01AC66'} marginLeft={'-250px'} nameButton={'Clear game'}></GameActionButton>
            <GameActionButton backgroundColor={'#01AC66'} color={'#fff'} borderColor={'#01AC66'} nameButton={'Add to cart'}>
              <BoxIcon>
                <Icon.FaCartArrowDown size={30} color={'#fff'}></Icon.FaCartArrowDown>
              </BoxIcon>
            </GameActionButton>
          </BoxActionsButtons>
        </BoxNewBet>

        <BoxNewCart>
          <Cart>
            <TextNewBet style={{ marginLeft: '20px' }}>CART</TextNewBet>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px', marginTop: '20px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>

              <BoxNumbersAndTypeOfGameSelecteds numberSelecteds={'01, 02, 03'} nameOfGame={data[2].type} markupColor={data[2].color} dataAndPrice={'11'} />


            </BoxInternalCart>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px', marginTop: '20px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds numberSelecteds={'01, 02, 03, 04, 05, 06 01, 02, 03, 04, 05, 06 '} nameOfGame={data[1].type} markupColor={data[1].color} dataAndPrice={'11'} />
            </BoxInternalCart>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px', marginTop: '20px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds numberSelecteds={'01, 02, 03, 04, 05, 06 01, 02, 03, 04, 05, 06, 05, 06 01, 02, 03, 04, 05, 06'} nameOfGame={data[3].type} markupColor={data[3].color} dataAndPrice={'11'} />
            </BoxInternalCart>

            <BoxInternalCart style={{ justifyContent: 'left', alignItems: 'flex-start' }}>
              <TextNewBet style={{ marginLeft: '20px' }}>CART</TextNewBet>
              <TextFor style={{ marginLeft: '20px', fontStyle: 'normal' }}>TOTAL:</TextFor>
              <TextFor style={{ marginLeft: '20px', fontStyle: 'normal' }}>R$ 7,00</TextFor>
            </BoxInternalCart>
          </Cart>

          <ButtonLogin onClick={() => { }}>
            Save
              <BoxIcon>
              <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
            </BoxIcon>
          </ButtonLogin>
        </BoxNewCart>

      </Container>
      <CopyrightBar />
    </>
  );
};


export default NewBet;


