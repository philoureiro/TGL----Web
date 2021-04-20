import React, { useCallback } from 'react';
import {
  Container, BoxRecentGames, TextRecentGames, TextDataAndPrice,
  ButtonNewBet, BoxIcon, DivAllGamesRecents,
} from './styles';
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';
import TypeOfGameButton from '../../components/TypeOfGameButton';
import BoxNumbersAndTypeOfGameSelecteds from '../../components/BoxNumbersAndTypeOfGameSelecteds';
import * as Icon from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface MyBetsProps {


}

const MyBets: React.FC<MyBetsProps> = ({ }) => {

  const dataRedux = useSelector((state: RootState) => state.userReducer);


  const handleGamesRecents = useCallback(() => {
    // if (dataRedux.gamesSelecteds.length > 3) {
    //   return (
    //     dataRedux.gamesSelecteds.map((element: any, index) => {
    //       console.log(element[0].color)
    //       return (
    //         <BoxNumbersAndTypeOfGameSelecteds key={index + 1} numberSelecteds={[]} nameOfGame={element.color} markupColor={element.color} dataAndPrice={'dsaf'} />
    //       )
    //     })
    //   );
    return <BoxIcon>
      <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
    </BoxIcon>

  }, [dataRedux]);
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
        <DivAllGamesRecents>{handleGamesRecents()}</DivAllGamesRecents>
      </Container>
      <CopyrightBar />
    </>
  );
};


export default MyBets;
