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

interface IGame {
  numbersSelecteds: number[];
  color: string;
  price: number;
  date: string;
  type: string;
}

interface ToastProps {
  showToast: boolean;
  message: string;
  color: string;
}


const NewBet: React.FC<NewBetProps> = () => {
  const data = getDataOfJson();
  const [numbers, setNumbers] = useState([]);
  const [numbersSelecteds, setnumbersSelecteds] = useState<number[]>([]);
  const [numbersSelectedsInCart, setnumbersSelectedsInCart] = useState<IGame[]>(
    [],
  );
  const [currentGame, setCurrentGame] = useState<DataProps[]>(data);
  const [showToast, setShowToast] = useState<ToastProps>();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let arrayOfButtons: any = [];

    for (let index = 0; index < currentGame[0].range; index++) {
      arrayOfButtons.push(index + 1);
    }

    setNumbers(arrayOfButtons);
    setnumbersSelecteds([]);

  }, [currentGame]);

  const HandleSelected = useCallback(
    (number: number) => {
      if (
        !numbersSelecteds.includes(number) &&
        numbersSelecteds.length < currentGame[0]['max-number']
      ) {
        setnumbersSelecteds(
          [...numbersSelecteds, number].sort((a, b) => a - b),
        );
      } else {
        setnumbersSelecteds(numbersSelecteds.filter(n => n !== number));
      }
    },
    [numbersSelecteds],
  );

  const functionReturnNumber = useCallback(() => {
    return numbers.map((number: any, index) => (
      <AroundGameButton
        key={index + 1}
        onClick={() => HandleSelected(number)}
        isSelected={numbersSelecteds.includes(number)}
        currentGame={currentGame}
        backgroundColor={'#ADC0C4'}
        numberButton={number}
      ></AroundGameButton>
    ));
  }, [numbersSelecteds]);

  const handleClickButtonTypeGame = useCallback(
    nameButton => {
      const dataCurrent = data.filter(e => e.type === nameButton);
      setCurrentGame(dataCurrent);
    },
    [currentGame],
  );

  const handleAddToCart = useCallback(
    typeOfGameSelected => {
      const dataAtual = new Date();
      const dataFormat = ((dataAtual.getDate())) + "/" + ((dataAtual.getMonth() + 1)) + "/" + dataAtual.getFullYear();

      let gameSelected: IGame = {
        type: typeOfGameSelected.type,
        price: typeOfGameSelected.price,
        date: dataFormat,
        color: typeOfGameSelected.color,
        numbersSelecteds: numbersSelecteds,
      };
      const array = [...numbersSelectedsInCart];
      array.push(gameSelected);
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
    while (currentArray.length < currentGame[0]['max-number']) {
      const buttonRandom = getRandom(1, currentGame[0].range);
      if (
        !numbersSelecteds.includes(buttonRandom) &&
        numbersSelecteds.length < currentGame[0]['max-number']
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

  const handleClickButtonSave = useCallback(() => {
    if (parseFloat(returnPriceTotal()) >= 30) {
      // dispatch(saveItensOfCart(numbersSelectedsInCart));
      setnumbersSelectedsInCart([]);
      history.push('/mybets');
    } else {
      setShowToast({ showToast: true, message: 'Precisamos de ao menos 30 reais em compras para salvarmos...', color: 'red' });
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
            {data.map((e: { type: string; color: string }, i: number) => {
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

          <BoxDescription>
            <TextChooseAGame>Fill your bet</TextChooseAGame>
            <TextDescriptionOfBet>
              {currentGame[0].description}
            </TextDescriptionOfBet>
          </BoxDescription>

          <BoxNumberAllButtonsArounds>
            {functionReturnNumber()}
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
                if (numbersSelecteds.length < currentGame[0]['max-number']) {
                  setShowToast({ showToast: true, message: `São necessários ao menos ${currentGame[0]['max-number']} números selecionados para adicionar ao carrinho!`, color: 'red' });
                  window.setTimeout(function () {
                    // setShowToast({ showToast: false, message: '', color: '' });
                  }, 3000);

                } else {
                  handleAddToCart(currentGame[0]);
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
                    <BoxNumbersAndTypeOfGameSelecteds
                      numberSelecteds={element.numbersSelecteds}
                      nameOfGame={element.type}
                      markupColor={element.color}
                      dataAndPrice={`${element.date} - R$ (${element.price.toFixed(2).replace('.', ',')})`}
                    />
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


