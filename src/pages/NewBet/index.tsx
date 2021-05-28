import React, { useEffect, useCallback, useState } from 'react';
import {
  Container,
  BoxNewBet,
  TextNewBet,
  TextChooseAGame,
  BoxNumberAllButtonsArounds,
  BoxIcon,
  BoxNewCart,
  TextFor,
  BoxTitle,
  BoxButtonsTypeOfGame,
  TextDescriptionOfBet,
  BoxActionsButtons,
  ButtonLogin,
  TextTitleCart,
  BoxInternalCart,
  BoxDescription,
  BoxEmptyCart,
  Img,
  PriceTotalOfGames
} from './styles';
import { getDataOfJson } from '../../services/apiii';
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';
import TypeOfGameButton from '../../components/TypeOfGameButton';
import GameActionButton from '../../components/GameActionButton';
import AroundGameButton from '../../components/AroundGameButton';
import BoxNumbersAndTypeOfGameSelecteds from '../../components/BoxNumbersAndTypeOfGameSelecteds';
import Cart from '../../components/Cart';
import * as Icon from 'react-icons/fa';
import EmptyCart from '../../assets/emptyCar.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { } from '../../store/actions';
import { useHistory } from 'react-router-dom';
import Toast from '../../components/Toast';
import { IMainReducer } from '../../store/reducers';
import api from '../../services/api';

interface NewBetProps { }
interface DataProps {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

interface IBet {
  id: number;
  price: number;
  numbers_selecteds: string;
}
interface IGame {
  id: number,
  numbersSelecteds: string;
  color: string;
  price: number;
  date: string;
  type: string;
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

interface ToastProps {
  showToast: boolean;
  message: string;
  color: string;
}


const NewBet: React.FC<NewBetProps> = () => {
  const gamesRedux = useSelector((state: IMainReducer) => state.gameReducer.games);
  const userRedux = useSelector((state: IMainReducer) => state.userReducer.user);
  const [numbers, setNumbers] = useState([]);
  const [numbersSelecteds, setnumbersSelecteds] = useState<number[]>([]);
  const [numbersSelectedsInCart, setnumbersSelectedsInCart] = useState<IGame[]>(
    [],
  );
  const [gameSelected, setGameSelected] = useState<IGameProps>(gamesRedux[0]);
  const [showToast, setShowToast] = useState<ToastProps>();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

    let arrayOfButtons: any = [];

    for (let index = 0; index < gameSelected.range; index++) {
      arrayOfButtons.push(index + 1);
    }

    setNumbers(arrayOfButtons);
    setnumbersSelecteds([]);

  }, [gameSelected]);


  const handleClickAroundButtons = useCallback((number) => {

    if (!numbersSelecteds.includes(number) && numbersSelecteds.length < gameSelected.max_number) {
      setnumbersSelecteds([...numbersSelecteds, number].sort((a, b) => a - b))
    } else {
      setnumbersSelecteds(numbersSelecteds.filter(element => element !== number))
    }

  }, [numbersSelecteds]);

  const returnAroundButtons = useCallback(() => {
    let aroundButtons = [];
    for (let index = 0; index < gameSelected.range; index++) {

      aroundButtons.push(<AroundGameButton key={index + 1} onClick={() => handleClickAroundButtons(index + 1)} numberButton={index + 1}
        color={gameSelected.color} isSelected={numbersSelecteds.includes(index + 1)} />)
    }
    return aroundButtons;
  }, [gameSelected, numbersSelecteds]);

  const handleClickTypeGame = useCallback((game) => {
    setGameSelected(game)
    setnumbersSelecteds([]);

  }, [gameSelected])

  const handleAddToCart = useCallback(() => {
    const dataAtual = new Date();
    const dataFormat = ((dataAtual.getDate())) + "/" + ((dataAtual.getMonth() + 1)) + "/" + dataAtual.getFullYear();
    let gameSelectedCurrent: IGame = {
      type: gameSelected.type,
      id: gameSelected.id,
      price: gameSelected.price,
      date: dataFormat,
      color: gameSelected.color,
      numbersSelecteds: JSON.stringify(numbersSelecteds).replace("[", '').replace("]", '')
    };
    const array = [...numbersSelectedsInCart];
    array.push(gameSelectedCurrent);
    setnumbersSelectedsInCart(array);
    setnumbersSelecteds([]);
  },
    [numbersSelecteds],
  );

  function getRandom(minValue: number, maxValue: number) {
    return Math.floor(Math.random() * maxValue + minValue);
  }

  const handleCompleteGame = useCallback(() => {
    let currentArray = numbersSelecteds;
    while (currentArray.length < gameSelected['max_number']) {
      const buttonRandom = getRandom(1, gameSelected.range);
      if (
        !numbersSelecteds.includes(buttonRandom) &&
        numbersSelecteds.length < gameSelected['max_number']
      ) {
        currentArray.push(buttonRandom);
      }
    }

    setnumbersSelecteds([...currentArray].sort((a, b) => a - b));
  }, [numbersSelecteds]);

  const returnPriceTotal = useCallback(() => {
    let price = 0;
    numbersSelectedsInCart.forEach(element => {
      price += element.price;
    });



    return price.toFixed(2).replace('.', ',');
  }, [numbersSelectedsInCart]);

  const handleClickButtonSave = useCallback(async () => {

    try {
      if (parseFloat(returnPriceTotal()) >= 30) {

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userRedux.token.token}`
          }
        }

        let cart: IBet[] = [];

        numbersSelectedsInCart.forEach((bet: any) => {

          const currentBet = {
            id: bet.id,
            price: bet.price,
            numbers_selecteds: bet.numbersSelecteds,
          }
          cart.push(currentBet)
        })

        await api.post('/bets', { cart: cart, totalPrice: 50 }, config).then(async response => {
          setShowToast({ showToast: true, message: 'Apostas salva com sucesso!', color: 'green' });
          setnumbersSelectedsInCart([]);
          history.push('/mybets');
        });

      } else {
        setShowToast({ showToast: true, message: 'Precisamos de ao menos 30 reais em compras para salvarmos...', color: 'red' });
        window.setTimeout(function () {
          setShowToast({ showToast: false, message: '', color: '' });
        }, 3000);
      }
    } catch (error) {
      console.log(error)
      setShowToast({ showToast: true, message: 'Erro ao salvar apostas.', color: 'red' });
      window.setTimeout(function () {
        setShowToast({ showToast: false, message: '', color: '' });
      }, 3000);
    }
  }, [numbersSelectedsInCart]);

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
            {
              gamesRedux.map((item: any, i: number) => {
                return (
                  <TypeOfGameButton

                    onClick={() => handleClickTypeGame(item)}
                    key={i + 1}
                    isSelected={gameSelected === item}
                    colorText={item.color}
                    colorButton={item.color}
                    nameButton={item.type}
                  ></TypeOfGameButton>
                );
              })}
          </BoxButtonsTypeOfGame>

          <BoxDescription>
            <TextChooseAGame>Fill your bet</TextChooseAGame>
            <TextDescriptionOfBet>
              {gameSelected.description}
            </TextDescriptionOfBet>
          </BoxDescription>

          <BoxNumberAllButtonsArounds>
            {returnAroundButtons()}
          </BoxNumberAllButtonsArounds>

          <BoxActionsButtons>
            <GameActionButton
              nameButton={'Complete game'}
              onClick={() => handleCompleteGame()}
              backgroundColor={'#fff'}
              color={'#01AC66'}
              borderColor={'#01AC66'}
            ></GameActionButton>

            <GameActionButton
              nameButton={'Clear game'}
              onClick={() => setnumbersSelecteds([])}
              backgroundColor={'#fff'}
              color={'#01AC66'}
              borderColor={'#01AC66'}
              marginLeft={'-250px'}
            ></GameActionButton>

            <GameActionButton
              nameButton={'Add to cart'}
              onClick={() => {
                if (numbersSelecteds.length < gameSelected['max_number']) {
                  setShowToast({ showToast: true, message: `São necessários ao menos ${gameSelected['max_number']} números selecionados para adicionar ao carrinho!`, color: 'red' });
                  window.setTimeout(function () {
                    // setShowToast({ showToast: false, message: '', color: '' });
                  }, 3000);

                } else {
                  handleAddToCart();
                }
              }}
              backgroundColor={'#01AC66'}
              color={'#fff'}
              borderColor={'#01AC66'}
            >
              <BoxIcon>
                <Icon.FaCartArrowDown
                  size={30}
                  color={'#fff'}
                ></Icon.FaCartArrowDown>
              </BoxIcon>
            </GameActionButton>
          </BoxActionsButtons>

        </BoxNewBet>

        <BoxNewCart>

          <Cart>
            <TextNewBet style={{ marginLeft: '20px' }}>CART</TextNewBet>

            {numbersSelectedsInCart.length === 0 ? (
              <BoxEmptyCart>
                <Img
                  src={EmptyCart}
                  style={{ width: '500px', marginRight: '40px' }}
                />
              </BoxEmptyCart>
            ) : (
              numbersSelectedsInCart.map((element: any, indice) => {
                let a = 0;
                return (
                  <BoxInternalCart key={indice + 1}>
                    <BoxIcon
                      onClick={() => {
                        setnumbersSelectedsInCart(
                          numbersSelectedsInCart.filter(e => e !== element),
                        );
                      }}
                      style={{ marginRight: '10px', marginTop: '20px' }}
                    >
                      <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
                    </BoxIcon>
                    {


                      <BoxNumbersAndTypeOfGameSelecteds onClick={() => { }} color={element.color} key={indice + 1}
                        hasIconTrash={false} numbersSelecteds={element.numbersSelecteds}
                        price={`R$ ${element.price.toFixed(2).replace('.', ',')}`} date={element.date} type={element.type}
                      ></BoxNumbersAndTypeOfGameSelecteds>
                    }
                  </BoxInternalCart>
                );
              })
            )}


          </Cart>
          <PriceTotalOfGames>
            {numbersSelectedsInCart.length > 0 ? (
              <BoxInternalCart
                style={{ justifyContent: 'left', alignItems: 'flex-end' }}>
                <TextNewBet style={{ marginLeft: '20px' }}>CART</TextNewBet>
                <TextFor style={{ marginLeft: '20px', fontStyle: 'normal' }}>
                  TOTAL:
                </TextFor>
                <TextFor style={{ marginLeft: '20px', fontStyle: 'normal' }}>
                  {' '}
                  {returnPriceTotal()}
                </TextFor>
              </BoxInternalCart>
            ) : null}
          </PriceTotalOfGames>
          <ButtonLogin onClick={() => handleClickButtonSave()}>
            Save
            <BoxIcon>
              <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
            </BoxIcon>
          </ButtonLogin>

        </BoxNewCart>
        {showToast?.showToast ? <Toast borderColor={showToast.color} textToast={showToast.message}>
          <BoxIcon>
            <Icon.FaInfoCircle size={30} color={showToast.color} ></Icon.FaInfoCircle>
          </BoxIcon>
        </Toast> : null}
      </Container>
      <CopyrightBar />
    </>
  );
};

export default NewBet;


