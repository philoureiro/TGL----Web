import React, { useState, useCallback } from 'react';
import {
  Container, BoxTypeOfCard, TextTypeOfCard, TextInput,
  ButtonRecoveryPassword, ButtonLogin, BoxIcon
} from './styles';
import CardInput from '../../components/CardInput';
import BoxLogoTheGreatestApp from '../../components/BoxLogoTheGreatestApp';
import CopyrightBar from '../../components/CopyrightBar';
import BoxInput from '../../components/BoxInput';
import Toast from '../../components/Toast';
import * as Icon from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveDataOfUser } from '../../store/actions';
import { RootState } from '../../store';
import * as Yup from 'yup';
import api from '../../services/api'

interface SignInProps {

}

interface SignInFormData {
  email: string;
  password: string;
}
interface ToastProps {
  showToast: boolean;
  message: string;
  color: string;
}

const SignIn: React.FC<SignInProps> = () => {

  const [textLogin, setTextLogin] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const dispatch = useDispatch();
  const dataRedux = useSelector((state: RootState) => state.userReducer);
  const [showToast, setShowToast] = useState<ToastProps>();


  const handleClickButtonSave = useCallback(async () => {
    let schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    const data: SignInFormData = {
      email: textLogin,
      password: textPassword
    }
    try {
      await schema.validate(data, {
        abortEarly: false,
      });


    } catch (error) {
      setShowToast({ showToast: true, message: error.message, color: 'red' });
      //if (error.message.includes())
      console.log(error.message);
    }

    window.setTimeout(function () {
      setShowToast({ showToast: false, message: '', color: '' });
    }, 3000);
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


export default SignIn;

/*

  const handleClickButtonSave = useCallback(() => {
    try {
      schema.isValid({
        email: textLogin,
        password: textPassword,
      }).then(async function (valid) {
        if (!valid) {
          setShowToast({ showToast: true, message: 'Email ou Senha incorreto com formato incorreto!', color: 'red' });
        } else {
          await api.post('/sessions', {
            email: textLogin,
            password: textPassword
          }).then(response => {
            const { currentToken, user } = response.data;
            console.log(currentToken, user);
          })
        }
      });
      window.setTimeout(function () {
        setShowToast({ showToast: false, message: '', color: '' });
      }, 3000);
    } catch (error) {
      if(error.message.includes())
      console.log(error.message);
    }
  }, [textLogin, textPassword]);
  */
