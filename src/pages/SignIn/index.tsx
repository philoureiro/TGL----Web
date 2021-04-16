import React from 'react';
import {
  Container, BoxTypeOfCard, TextTypeOfCard, TextInput,
  ButtonRecoveryPassword, ButtonLogin, BoxIcon
} from './styles';
import CardInput from '../../components/CardInput';
import BoxLogoTheGreatestApp from '../../components/BoxLogoTheGreatestApp';
import CopyrightBar from '../../components/CopyrightBar';
import BoxInput from '../../components/BoxInput';
import * as Icon from 'react-icons/fa';
import { useHistory } from 'react-router-dom';


interface SignInProps {

}

const SignIn: React.FC<SignInProps> = () => {

  const history = useHistory();
  return (
    <>
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Authentication</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Email:'} HasIcon={{ size: 20, color: '#fff' }}>
              <TextInput type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Password:'} HasIcon={{ size: 20, color: '#fff' }}>
              <TextInput type={'password'}></TextInput>
            </BoxInput>
            <ButtonRecoveryPassword onClick={() => history.push('/recovery')}>I forget my password</ButtonRecoveryPassword>
            <ButtonLogin onClick={() => history.push('/mybets')}>
              Log In
              <BoxIcon>
                <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
              </BoxIcon>
            </ButtonLogin>
          </CardInput>
          <ButtonLogin onClick={() => { history.push('/signup') }} style={{ color: '#707070' }}>
            Sign Up
            <BoxIcon>
              <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
            </BoxIcon>
          </ButtonLogin>
        </BoxTypeOfCard>
      </Container>
      <CopyrightBar />
    </>
  );
};


export default SignIn;
