import React, { useEffect, useCallback, useState } from 'react';
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
import { isInterfaceDeclaration } from 'typescript';

interface NewBetProps {

}
interface DataProps {

  type: string,
  description: string;
  range: number,
  price: number,
  'max-number': number,
  color: string,
  'min-cart-value': number,

}


const NewBet: React.FC<NewBetProps> = () => {
  const data = getDataOfJson();
  const [buttonsArounds, setButtonArounds] = useState([{}]);
  const [isSelected, setIsSelect] = useState(false);
  const [numbersOfButtonsSelecteds, setnumbersOfButtonsSelecteds] = useState(Array.prototype);

  const [currentGame, setCurrentGame] = useState([{
    type: 'Lotofácil',
    description: "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
    range: 25,
    price: 2.5,
    'max-number': 15,
    color: '#7F3992',
    'min-cart-value': 30
  }]);

  useEffect(() => {
    console.log('entrou no useEffect');

    let arrayOfButtons = [];

    for (let index = 0; index < currentGame[0].range; index++) {
      arrayOfButtons.push({ nameButton: `${index + 1}`, buttonIsSelected: false });
    }

    setButtonArounds(arrayOfButtons);


  }, [currentGame]);


  const HandleSelected = (button: any) => {

    let buttonCurrent: any = [];
    let currentArrayOfButtonsSelecteds: any = [];


    for (let index = 0; index < buttonsArounds.length; index++) {
      let element: any = buttonsArounds[index];

      if (element.nameButton === button.nameButton) {
        element.buttonIsSelected = !element.buttonIsSelected;
        buttonsArounds[index] = element;
      }

      if (element.buttonIsSelected) {
        if (currentArrayOfButtonsSelecteds.length < currentGame[0]['max-number']) {
          //console.log('Selecionou o botão ' + element.nameButton);
          currentArrayOfButtonsSelecteds.push(element.nameButton);
        }
        else if (currentArrayOfButtonsSelecteds.length === currentGame[0]['max-number']) {
          console.log('=>>encheu');
          element.buttonIsSelected = !element.buttonIsSelected;
          buttonsArounds[index] = element;
        } else {
          element.buttonIsSelected = !element.buttonIsSelected;
          buttonsArounds[index] = element;
          break;
        }
      }
    }

    buttonCurrent = buttonsArounds;

    setnumbersOfButtonsSelecteds([...currentArrayOfButtonsSelecteds]);
    setButtonArounds([...buttonCurrent]);

  };



  const functionReturnNumber = useCallback(() => {

    console.log('callback');
    console.log('numero de selects =>' + numbersOfButtonsSelecteds);

    return (buttonsArounds.map((e: any, index) => (
      <AroundGameButton key={index + 1} onClick={() => (HandleSelected(e))} isSelected={e.buttonIsSelected} currentGame={currentGame} backgroundColor={'#ADC0C4'} numberButton={
        e.nameButton}></AroundGameButton>)
    ));
  }, [buttonsArounds]);

  const handleClickButtonTypeGame = useCallback((nameButton) => {
    const dataCurrent = data.filter((e) => (e.type === nameButton));
    setCurrentGame(dataCurrent);
  }, [currentGame]);


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

          <BoxButtonsTypeOfGame>{
            data.map((e: { type: string, color: string }, i: number) => {
              return (
                <TypeOfGameButton currentGame={currentGame} onClick={() => handleClickButtonTypeGame(e.type)} key={i + 1} backgroundColor={'#fff'}
                  borderColor={e.color} color={e.color} nameButton={e.type} ></TypeOfGameButton >
              )
            })}

          </BoxButtonsTypeOfGame>

          <BoxDescription>
            <TextChooseAGame>Fill your bet</TextChooseAGame>
            <TextDescriptionOfBet>{currentGame[0].description}</TextDescriptionOfBet>
          </BoxDescription>

          <BoxNumberAllButtonsArounds>{
            functionReturnNumber()
            //console.log(e.buttonIsSelected);
          }</BoxNumberAllButtonsArounds>

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
              <BoxIcon style={{ marginRight: '10px', marginTop: '20px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>

              <BoxNumbersAndTypeOfGameSelecteds numberSelecteds={'01, 02, 03'} nameOfGame={data[2].type} markupColor={data[2].color} dataAndPrice={'11'} />


            </BoxInternalCart>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px', marginTop: '20px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds numberSelecteds={'01, 02, 03, 04, 05, 06 01, 02, 03, 04, 05, 06 '} nameOfGame={data[1].type} markupColor={data[1].color} dataAndPrice={'11'} />
            </BoxInternalCart>

            <BoxInternalCart>
              <BoxIcon style={{ marginRight: '10px', marginTop: '20px' }}>
                <Icon.FaTrash size={30} color={'#888888'}></Icon.FaTrash>
              </BoxIcon>
              <BoxNumbersAndTypeOfGameSelecteds numberSelecteds={'01, 02, 03, 04, 05, 06 01, 02, 03, 04, 05, 06, 05, 06 01, 02, 03, 04, 05, 06'} nameOfGame={data[3].type} markupColor={data[3].color} dataAndPrice={'11'} />
            </BoxInternalCart>

            <BoxInternalCart style={{ justifyContent: 'left', alignItems: 'flex-start' }}>
              <TextNewBet style={{ marginLeft: '20px' }}>CART</TextNewBet>
              <TextFor style={{ marginLeft: '20px', fontStyle: 'normal' }}>TOTAL:</TextFor>
              <TextFor style={{ marginLeft: '20px', fontStyle: 'normal' }}>R$ 7,00</TextFor>
            </BoxInternalCart>
          </Cart>

          <ButtonLogin>
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


/*
  const returnAroundButtons = useCallback(() => {
    let arrayOfButtons = [];

    for (let index = 0; index < currentGame[0].range; index++) {
      arrayOfButtons.push(<AroundGameButton key={index + 1} onClick={HandleSelected} isSelected={isSelected} currentGame={currentGame} backgroundColor={'#ADC0C4'} numberButton={`${index + 1}`}></AroundGameButton>)
    }

    return arrayOfButtons;
  }, [currentGame]);




 arrayOfButtons.push(<AroundGameButton key={index + 1} onClick={HandleSelected} isSelected={isSelected} currentGame={currentGame} backgroundColor={'#ADC0C4'} numberButton={`${index + 1}`}></AroundGameButton>)

*/
