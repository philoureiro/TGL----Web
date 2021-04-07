import React from 'react';
import {
  Container, MarkupLogo, BoxLogo,
  BoxIcon, TextAcount, ButtonExit, TextLogo
} from './styles';
import * as Icon from 'react-icons/fa';
const Card: React.FC = () => {

  return (
    <Container>
      <BoxLogo>
        <TextLogo>TGL</TextLogo>
        <MarkupLogo />
      </BoxLogo>

      <TextAcount>Account</TextAcount>
      <ButtonExit>
        Log out
        <BoxIcon>
          <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
        </BoxIcon>

      </ButtonExit>
    </Container>
  );
}

export default Card;
