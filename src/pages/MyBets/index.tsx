import React from 'react';
import {
  Container, BoxRecentGames, TextRecentGames, TextDataAndPrice,
  ButtonNewBet, BoxIcon, DivAllGamesRecents
} from './styles';
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';
import TypeOfGameButton from '../../components/TypeOfGameButton';
import BoxNumbersAndTypeOfGameSelecteds from '../../components/BoxNumbersAndTypeOfGameSelecteds';
import * as Icon from 'react-icons/fa';

interface MyBetsProps {


}

const MyBets: React.FC<MyBetsProps> = ({ }) => {
  return (
    <>
      <Header />
      <Container>
        <BoxRecentGames>
          <TextRecentGames>RECENT GAMES</TextRecentGames>
          <TextDataAndPrice>Filters</TextDataAndPrice>
          <TypeOfGameButton backgroundColor={'#01AC66'} borderColor={'#7F3992'} color={'#7F3992'} nameButton={'Lotomania'}></TypeOfGameButton>
          <TypeOfGameButton backgroundColor={'#01AC66'} borderColor={'#7F3992'} color={'#7F3992'} nameButton={'Lotofácil'}></TypeOfGameButton>
          <TypeOfGameButton backgroundColor={'#01AC66'} borderColor={'#7F3992'} color={'#7F3992'} nameButton={'Mega-Sena'}></TypeOfGameButton>


          <ButtonNewBet>
            New Bet
            <BoxIcon>
              <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
            </BoxIcon>
          </ButtonNewBet>
        </BoxRecentGames>
        <DivAllGamesRecents>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
          <BoxNumbersAndTypeOfGameSelecteds></BoxNumbersAndTypeOfGameSelecteds>
        </DivAllGamesRecents>




      </Container>
      <CopyrightBar />
    </>
  );
};


export default MyBets;
