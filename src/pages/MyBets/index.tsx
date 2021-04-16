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
import { useHistory } from 'react-router-dom';

interface MyBetsProps {


}

const MyBets: React.FC<MyBetsProps> = ({ }) => {

  const history = useHistory();
  return (
    <>
      <Header />
      <Container>
        <BoxRecentGames>
          <TextRecentGames>RECENT GAMES</TextRecentGames>
          <TextDataAndPrice>Filters</TextDataAndPrice>

          <ButtonNewBet onClick={() => history.push('/newbet')}>
            New Bet
            <BoxIcon>
              <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
            </BoxIcon>
          </ButtonNewBet>
        </BoxRecentGames>
        <DivAllGamesRecents>

        </DivAllGamesRecents>




      </Container>
      <CopyrightBar />
    </>
  );
};


export default MyBets;
