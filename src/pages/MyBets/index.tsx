import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  BoxRecentGames,
  TextRecentGames,
  TextDataAndPrice,
  ButtonNewBet,
  BoxIcon,
  DivAllGamesRecents,
  BoxButtonsTypeOfGame
} from './styles';
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';
import TypeOfGameButton from '../../components/TypeOfGameButton';
import BoxNumbersAndTypeOfGameSelecteds from '../../components/BoxNumbersAndTypeOfGameSelecteds';
import * as Icon from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IMainReducer } from '../../store/reducers';
import { getDataOfJson } from '../../services/apiii'

interface MyBetsProps { }

interface RecentGamesProps {
  type: string;
  color: string;
  price: number;
  date: string;
  numbersSelecteds: [];
}

interface currentGameProps {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number
}

const MyBets: React.FC<MyBetsProps> = ({ }) => {
  const dataRedux = useSelector(
    (state: IMainReducer) => state.cartReducer.gamesSelecteds,
  );

  const [recentGames, setRecentGames] = useState([]);

  const [currentGame, setCurrentGame] = useState<currentGameProps[]>([]);


  useEffect(() => {
    let array;
    if (currentGame[0]) {
      array = dataRedux.filter((element: RecentGamesProps) => element.type === currentGame[0].type)
      setRecentGames(array);
    } else {
      array = dataRedux;
      setRecentGames(array);
    }


  }, [currentGame]);


  const data = getDataOfJson();

  const handleClickButtonTypeGame = useCallback(
    nameButton => {
      const dataCurrent = data.filter(e => e.type === nameButton);
      setCurrentGame(dataCurrent);
    },
    [currentGame],
  );
  const history = useHistory();
  return (
    <>
      <Header />
      <Container>
        <BoxRecentGames>
          <TextRecentGames>RECENT GAMES</TextRecentGames>
          <TextDataAndPrice>Filters</TextDataAndPrice>
          <BoxButtonsTypeOfGame>
            {
              data.map((e: { type: string; color: string }, i: number) => {
                return (
                  <TypeOfGameButton
                    currentGame={currentGame}
                    onClick={() => handleClickButtonTypeGame(e.type)}
                    key={i + 1}
                    backgroundColor={'#fff'}
                    borderColor={e.color}
                    color={e.color}
                    nameButton={e.type}
                  ></TypeOfGameButton>
                );
              })}
          </BoxButtonsTypeOfGame>

          <ButtonNewBet onClick={() => history.push('/newbet')}>
            New Bet
            <BoxIcon>
              <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
            </BoxIcon>
          </ButtonNewBet>
        </BoxRecentGames>
        <DivAllGamesRecents>{
          recentGames.length !== 0 ?
            recentGames.map((element: RecentGamesProps, index) => {
              return (
                <BoxNumbersAndTypeOfGameSelecteds
                  key={index + 1}
                  numberSelecteds={element.numbersSelecteds}
                  nameOfGame={element.type}
                  markupColor={element.color}
                  dataAndPrice={`${element.date} - R$ (${element.price.toFixed(2).replace('.', ',')})`}
                />
              );
            })

            :
            <TextRecentGames style={{ marginTop: '150px', fontWeight: 'normal' }}>{`Não existe nenhum jogo salvo!`}</TextRecentGames>


        }</DivAllGamesRecents>
      </Container>
      <CopyrightBar />
    </>
  );
};

export default MyBets;
