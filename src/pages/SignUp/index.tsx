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


interface SignUpProps {

}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <>
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Registration</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Name:'} HasIcon={{ size: 20, color: '#fff' }}>
              <TextInput type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Email:'} HasIcon={{ size: 20, color: '#fff' }}>
              <TextInput type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Password:'} HasIcon={{ size: 20, color: '#fff' }}>
              <TextInput type={'password'}></TextInput>
            </BoxInput>
            <ButtonLogin onClick={() => { }}>
              Register
              <BoxIcon>
                <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
              </BoxIcon>
            </ButtonLogin>
          </CardInput>
          <ButtonLogin onClick={() => { }} style={{ color: '#707070' }}>
            <BoxIcon>
              <Icon.FaArrowLeft size={30}></Icon.FaArrowLeft>
            </BoxIcon>
            Back

          </ButtonLogin>
        </BoxTypeOfCard>
      </Container>
      <CopyrightBar />
    </>
  );
};


export default SignUp;
