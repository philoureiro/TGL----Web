import React from 'react';
import {
  Container, BoxNewBet, TextNewBet, TextChooseAGame, BoxNumberAllButtonsArounds, BoxIcon,
  BoxNewCart, TextFor, BoxTitle, BoxButtonsTypeOfGame, TextDescriptionOfBet, BoxActionsButtons
} from './styles';
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';
import TypeOfGameButton from '../../components/TypeOfGameButton';
import GameActionButton from '../../components/GameActionButton';
import AroundGameButton from '../../components/AroundGameButton';
import * as Icon from 'react-icons/fa';


interface NewBetProps {

}

const NewBet: React.FC<NewBetProps> = () => {
  return (
    <>
      <Header />
      <Container>
        <BoxNewBet>
          <BoxTitle>
            <TextNewBet>NEW BET</TextNewBet>
            <TextFor>FOR MEGA-SENA</TextFor>
          </BoxTitle>

          <TextChooseAGame>Choose a game</TextChooseAGame>
          <BoxButtonsTypeOfGame>
            <TypeOfGameButton nameButton={'Lotomania'}></TypeOfGameButton>
            <TypeOfGameButton nameButton={'Lotofácil'}></TypeOfGameButton>
            <TypeOfGameButton nameButton={'Mega-Sena'}></TypeOfGameButton>
          </BoxButtonsTypeOfGame>
          <TextChooseAGame>Fill your bet</TextChooseAGame>
          <TextDescriptionOfBet>Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</TextDescriptionOfBet>

          <BoxNumberAllButtonsArounds>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>
            <AroundGameButton backgroundColor={'#27C383'} numberButton={'01'}></AroundGameButton>



          </BoxNumberAllButtonsArounds>

          <BoxActionsButtons>
            <GameActionButton nameButton={'Complete game'}></GameActionButton>
            <GameActionButton nameButton={'Clear game'}></GameActionButton>
            <GameActionButton nameButton={'Add to cart'}>
              <BoxIcon>
                <Icon.FaCartArrowDown size={30} color={'#fff'}></Icon.FaCartArrowDown>
              </BoxIcon>
            </GameActionButton>
          </BoxActionsButtons>
        </BoxNewBet>

        <BoxNewCart>
          <TypeOfGameButton nameButton={'Lotomania'}></TypeOfGameButton>
          <TypeOfGameButton nameButton={'Lotofácil'}></TypeOfGameButton>
          <TypeOfGameButton nameButton={'Mega-Sena'}></TypeOfGameButton>
        </BoxNewCart>


      </Container>
      <CopyrightBar />
    </>
  );
};


export default NewBet;
