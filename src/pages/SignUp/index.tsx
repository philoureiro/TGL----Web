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
import { useDispatch } from 'react-redux';
import { saveDataOfUser } from '../../store/actions'
import * as Yup from 'yup';

interface SignUpProps {

}

const SignUp: React.FC<SignUpProps> = () => {

  const [textName, setTextName] = useState('');
  const [textLogin, setTextLogin] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const dispatch = useDispatch();

  let schema = Yup.object().shape({
    name: Yup.string().required().min(6),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  const handleClickButtonRegister = useCallback(() => {
    try {
      schema.isValid({
        name: textName,
        email: textLogin,
        password: textPassword,
      }).then(function (valid) {
        if (!valid) {
          window.alert('Nome, Email ou Senha com formato incorreto! verifique novamente os campos.');
        } else {
          dispatch(saveDataOfUser(textName, textLogin, textPassword))
          window.alert('Usuário cadastrado com sucesso!');
          history.push('/');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [textName, textPassword, textLogin]);

  const history = useHistory();
  return (
    <>
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Registration</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Name:'}>
              <TextInput onChange={text => setTextName(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Email:'} >
              <TextInput onChange={text => setTextLogin(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Password:'}>
              <TextInput onChange={text => setTextPassword(text.target.value)} type={'password'}></TextInput>
            </BoxInput>
            <ButtonLogin onClick={() => handleClickButtonRegister()}>
              Register
              <BoxIcon>
                <Icon.FaArrowRight size={30}></Icon.FaArrowRight>
              </BoxIcon>
            </ButtonLogin>
          </CardInput>
          <ButtonLogin onClick={() => history.goBack()} style={{ color: '#707070' }}>
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
