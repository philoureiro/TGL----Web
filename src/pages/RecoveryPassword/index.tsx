import React, { useCallback, useState } from 'react';
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
import * as Yup from 'yup';
import Toast from '../../components/Toast';
import api from '../../services/api';


interface RecoveryPasswordProps {

}


interface ToastProps {
  showToast: boolean;
  message: string;
  color: string;
}

const RecoveryPassword: React.FC<RecoveryPasswordProps> = () => {

  const [textEmail, setTextEmail] = useState('');
  const [showToast, setShowToast] = useState<ToastProps>();

  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const handleClickButtonRecovery = useCallback(() => {
    try {
      schema.isValid({
        email: textEmail,
      }).then(async function (valid) {
        if (!valid) {
          setShowToast({ showToast: true, message: 'Dados digitados em formato incorreto!', color: 'red' });
        } else {

          await api.post('/forgotpassword', {
            "email": textEmail,
            "redirect_url": "http://www.meusistema.com/recovery-password"
          }).then(response => {
            setShowToast({ showToast: true, message: 'Email enviado com sucesso!', color: 'green' })
            window.setTimeout(function () {
              history.push('/');
            }, 1000);
          })
        }
      });
      window.setTimeout(function () {
        setShowToast({ showToast: false, message: '', color: '' });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }, [textEmail]);

  const history = useHistory();
  return (
    <>
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Reset password</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Email:'}>
              <TextInput onChange={text => setTextEmail(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <ButtonLogin onClick={() => { handleClickButtonRecovery() }}>
              Send link
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


export default RecoveryPassword;


/**
 *
 *
 *
 *
  const handleClickButton = useCallback(async () => {
    setLoading(true);
    try {
      await api.post('/forgotpassword', {
        "email": email,
        "redirect_url": "http://www.meusistema.com/recovery-password"
      }).then(response => {
        setLoading(false);
        navigation.navigate('UpdatePassword')
      })
    } catch (error) {
      console.log('=>', error)
      setLoading(false);
      Alert.alert('Erro ao recuperar senha!')
    }
 *
 */
