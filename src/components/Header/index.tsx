import React from 'react';
import {
  Container, MarkupLogo, BoxLogo,
  BoxIcon, ButtonAccount, ButtonLogout, TextLogo
} from './styles';
import * as Icon from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
const Card: React.FC = () => {

  const history = useHistory();
  return (
    <Container>
      <BoxLogo>
        <TextLogo>TGL</TextLogo>
        <MarkupLogo />
      </BoxLogo>

      <ButtonAccount onClick={() => history.push('/mybets')}>Account</ButtonAccount>
      <ButtonLogout onClick={() => history.push('/')}>
        Log out
        <BoxIcon>
          <Icon.FaArrowRight size={25}></Icon.FaArrowRight>
        </BoxIcon>

      </ButtonLogout>
    </Container>
  );
}

export default Card;
