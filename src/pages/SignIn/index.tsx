import React, { useState, useCallback, useEffect } from 'react';
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
import { saveDataOfUser, saveGames } from '../../store/actions';
import { gameReducer, IMainReducer, IUserState } from '../../store/reducers'
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
  const userRedux = useSelector((state: IMainReducer) => state.userReducer.user);
  const gameRedux = useSelector((state: IMainReducer) => state.gameReducer.games);
  const betRedux = useSelector((state: IMainReducer) => state.betReducer.myBets);
  const [showToast, setShowToast] = useState<ToastProps>();
  const [loading, setLoading] = useState(false);



  const handleClickButtonLogin = useCallback(async () => {
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

      let currentToken: any, user;


      await api.post('/sessions', {
        "email": textLogin,
        "password": textPassword

      }).then(async response => {
        currentToken = response.data.currentToken;
        user = response.data.user;
        //  console.log('=>response', response.data);
        const userData: IUserState = {
          user: {
            refreshToken: currentToken.refreshToken,
            token: {
              token: currentToken.token,
              type: currentToken.type,
            },
            email: user.email,
            id: user.id,
            username: user.username,
          }
        }

        //console.log(userData)
        await dispatch(saveDataOfUser(userData));
        setLoading(false);
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userRedux.token.token}`
        }
      }

      await api.get('/games', config).then(async response => {
        console.log('=>', response.data)
        await dispatch(saveGames(response.data));
        setLoading(false);
      })

      history.push('/mybets')
    } catch (error) {
      if (error.message.includes('password must be at least 6 characters')) {
        setShowToast({ showToast: true, message: 'A senha deve ter no mínimo 06 letras.', color: 'red' });
      }

      if (error.message.includes('Request failed with status code 401')) {
        setShowToast({ showToast: true, message: 'Email ou Senha incorretos.', color: 'red' });
      }
      console.log(error);
    }

    window.setTimeout(function () {
      setShowToast({ showToast: false, message: '', color: '' });
    }, 3000);
  }, [textLogin, textPassword]);


  const history = useHistory();


  useEffect(() => {
    // console.log('=> USER', userRedux);
    // console.log('=> GAME', gameRedux);
    // console.log('=> BET', betRedux);
  }, [gameRedux, betRedux, userRedux])
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
            <ButtonLogin onClick={() => handleClickButtonLogin()}>
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
