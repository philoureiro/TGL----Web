import React, { useCallback, useEffect, useState } from 'react';
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

interface RecentGamesProps {
  type: string,
  color: string,
  price: number,
  numbersSelecteds: []
}



const MyBets: React.FC<MyBetsProps> = ({ }) => {

  const dataRedux = useSelector((state: RootState) => state.userReducer.gamesSelecteds);
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    // console.log(dataRedux[0]);
    // if (dataRedux.gamesSelecteds.length >= 3) {
    //   setRecentGames(dataRedux.gamesSelecteds);
    // }
  }, [dataRedux]);


  const handleRecentGame = useCallback(() => {
    let i = 0;
    let currentArray: any = [];
    // console.log(dataRedux);
    // while (dataRedux[i] && dataRedux[i] !== undefined) {
    //   //   console.log('qtd i', i);
    //   //   console.log('tipo', dataRedux[i]);
    //   //   i++;
    //   //   //setRecentGames([dataRedux[i]]);
    //   //   //currentArray.push(dataRedux[i]);
    // }

    //console.log(currentArray);
    return (
      <BoxIcon>
        <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
      </BoxIcon>
    );
    //  setRecentGames(...currentArray);
  }, [dataRedux]);


  console.log(dataRedux);

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
        <DivAllGamesRecents>{handleRecentGame()}</DivAllGamesRecents>

      </Container>
      <CopyrightBar />
    </>
  );
};


export default MyBets;
