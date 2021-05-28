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
import api from '../../services/api';

interface MyBetsProps { }

interface RecentGamesProps {
  type: string;
  color: string;
  price: number;
  date: string;
  numbersSelecteds: [];
}
interface IGameProps {
  id: number,
  type: string,
  description: string,
  price: number,
  color: string,
  range: number,
  max_number: number,
  min_cart_value: number,
}

const MyBets: React.FC<MyBetsProps> = ({ }) => {

  const userRedux = useSelector((state: IMainReducer) => state.userReducer.user);
  const gamesRedux = useSelector((state: IMainReducer) => state.gameReducer.games);
  const [gamesSelecteds, setGamesSelecteds] = useState<IGameProps[]>([]);
  const [betsOfUserOnTheApi, SetBetsOfUserOnTheApi] = useState([]);

  async function loadingDataOnTheAPI(config: {}) {
    let filter = [];
    filter = gamesSelecteds.map((game) => {
      return (game.id);
    })
    await api.post('/bets/filter', { filter: filter }, config).then(response => {

      SetBetsOfUserOnTheApi(response.data)

      // });
    })
  }

  useEffect(() => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userRedux.token.token}`
      }
    }

    try {
      loadingDataOnTheAPI(config);

    } catch (error) {
      console.log('=>error', error)
    }
  }, [gamesSelecteds, gamesRedux])

  const data = getDataOfJson();


  const handleClickTypeGame = useCallback((game) => {
    if (gamesSelecteds.length > 0) {

      gamesSelecteds.includes(game)
        ? setGamesSelecteds(gamesSelecteds.filter(element => game !== element))
        :
        setGamesSelecteds([...gamesSelecteds, game])
    } else {
      setGamesSelecteds([game])
    }

  }, [gamesSelecteds])


  const returnFilteredsBets = useCallback(() => {
    return betsOfUserOnTheApi.map((bet: any, index: number) => {

      const date = bet.updated_at.split('T')[0].replaceAll('-', '/')

      const price = `(R$ ${bet.price.toFixed(2).replace('.', ',')})`
      let game: any;

      if (gamesRedux !== undefined) {
        game = gamesRedux.filter((game) => game.id === bet.game_id)[0]
      }

      return (
        <BoxNumbersAndTypeOfGameSelecteds onClick={() => { }} color={game !== undefined ? game.color : '#fff'} key={index + 1}
          hasIconTrash={false} numbersSelecteds={bet.numbers_selecteds}
          price={price} date={date} type={game.type}
        ></BoxNumbersAndTypeOfGameSelecteds>
      )
    })
  }, [betsOfUserOnTheApi]);

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
              gamesRedux.map((item: any, i: number) => {
                return (
                  <TypeOfGameButton

                    onClick={() => handleClickTypeGame(item)}
                    key={i + 1}
                    isSelected={gamesSelecteds.includes(item)}
                    colorText={item.color}
                    colorButton={item.color}
                    nameButton={item.type}
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

          betsOfUserOnTheApi.length > 0 ?
            returnFilteredsBets()

            :
            <TextRecentGames style={{ marginTop: '150px', fontWeight: 'normal' }}>{`Não existe nenhum jogo salvo!`}</TextRecentGames>


        }</DivAllGamesRecents>
      </Container>
      <CopyrightBar />
    </>
  );
};

export default MyBets;
