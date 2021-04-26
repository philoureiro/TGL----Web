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
import Toast from '../../components/Toast';

interface SignUpProps {

}

interface ToastProps {
  showToast: boolean;
  message: string;
  color: string;
}

const SignUp: React.FC<SignUpProps> = () => {

  const [textName, setTextName] = useState('');
  const [textLogin, setTextLogin] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState<ToastProps>();

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
          setShowToast({ showToast: true, message: 'Dados digitados em formato incorreto!', color: 'red' });
        } else {
          dispatch(saveDataOfUser(textName, textLogin, textPassword))
          setShowToast({ showToast: true, message: 'Usuário cadastrado com sucesso!', color: 'green' })
          window.setTimeout(function () {
            history.push('/');
          }, 1000);
        }
      });
      window.setTimeout(function () {
        setShowToast({ showToast: false, message: '', color: '' });
      }, 3000);
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


export default SignUp;
