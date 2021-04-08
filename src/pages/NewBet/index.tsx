import React, { useEffect, useCallback } from 'react';
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

  const returnAroundButtons = useCallback((indice) => {
    let aux = 0;
    let arrayOfButtons = [];

    while (aux < data[indice].range) {
      arrayOfButtons.push(
        <AroundGameButton backgroundColor={data[indice].color} numberButton={`${aux + 1}`}></AroundGameButton>
      );
      aux++;
    }
    return arrayOfButtons;
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

          <BoxButtonsTypeOfGame>

            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#fff'} nameButton={'Lotomania'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Lotofácil'}></TypeOfGameButton>

            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>
          </BoxButtonsTypeOfGame>

          <BoxDescription>
            <TextChooseAGame>Fill your bet</TextChooseAGame>
            <TextDescriptionOfBet>Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</TextDescriptionOfBet>

          </BoxDescription>

          <BoxNumberAllButtonsArounds>


            {
              returnAroundButtons(3)
            }


          </BoxNumberAllButtonsArounds>

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
              <BoxIcon style={{ marginRight: '10px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
            </BoxInternalCart>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
            </BoxInternalCart>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
            </BoxInternalCart>


            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
            </BoxInternalCart>


            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
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


/**
 *
 *
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#fff'} nameButton={'Lotomania'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Lotofácil'}></TypeOfGameButton>
            <TypeOfGameButton backgroundColor={'#01AC66'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>

 *
             {
              data.map((e) => (
                <TypeOfGameButton backgroundColor={'#fff'} color={e.color} nameButton={'Lotomania'}></TypeOfGameButton>
              ))
            }



             data.map((e, i) => (
                <AroundGameButton backgroundColor={e.color} numberButton={`${i + 1}`}></AroundGameButton>
              ))
 */
