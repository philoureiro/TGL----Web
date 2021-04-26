import React, { useState, useCallback } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { saveDataOfUser } from '../../store/actions';
import { RootState } from '../../store';
import * as Yup from 'yup';

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = () => {

  const [textLogin, setTextLogin] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const dispatch = useDispatch();
  const dataRedux = useSelector((state: RootState) => state.userReducer);

  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  const handleClickButtonSave = useCallback(() => {
    try {
      schema.isValid({
        email: textLogin,
        password: textPassword,
      }).then(function (valid) {
        !valid ? window.alert('Email ou Senha com formato incorreto! verifique novamente os campos.') :
          textLogin === dataRedux.email && textPassword === dataRedux.password ? history.push('/mybets') :
            window.alert('Email ou senha incorretos!');
      });
    } catch (error) {
      console.log(error);
    }
  }, [textLogin, textPassword]);

  const history = useHistory();
  return (
    <>
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Authentication</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Email:'}>
              <TextInput onChange={text => setTextLogin(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Password:'}>
              <TextInput onChange={text => setTextPassword(text.target.value)} type={'password'}></TextInput>
            </BoxInput>
            <ButtonRecoveryPassword onClick={() => history.push('/recovery')}>I forget my password</ButtonRecoveryPassword>
            <ButtonLogin onClick={() => handleClickButtonSave()}>
              Log In
              <BoxIcon>
                <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
              </BoxIcon>
            </ButtonLogin>
          </CardInput>
          <ButtonLogin onClick={() => history.push('/signup')} style={{ color: '#707070' }}>
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
