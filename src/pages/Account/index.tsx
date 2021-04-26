import React, { useCallback, useState, useEffect } from 'react';
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
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { IMainReducer } from '../../store/reducers';
import { saveDataOfUser } from '../../store/actions';
import Toast from '../../components/Toast';



interface RecoveryPasswordProps {

}

interface ToastProps {
  showToast: boolean;
  message: string;
  color: string;
}

const RecoveryPassword: React.FC<RecoveryPasswordProps> = () => {

  const dispatch = useDispatch();
  const dataRedux = useSelector(
    (state: IMainReducer) => state.userReducer,
  );

  const [textEmail, setTextEmail] = useState('');
  const [textName, setTextName] = useState('');
  const [textPassword, setTextPassword] = useState('');
  const [showToast, setShowToast] = useState<ToastProps>();

  useEffect(() => {
    setTextName(dataRedux.name);
    setTextEmail(dataRedux.email);
    setTextPassword(dataRedux.password);
  }, [dataRedux]);

  let schema = Yup.object().shape({
    name: Yup.string().required().min(6),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  const handleClickButtonUpdate = useCallback(() => {
    try {
      schema.isValid({
        email: textEmail,
        name: textName,
        password: textPassword,
      }).then(function (valid) {
        if (!valid) {
          setShowToast({ showToast: true, message: 'Dados digitados em formato incorreto!', color: 'red' });
        } else {
          dispatch(saveDataOfUser(textName, textEmail, textPassword));
          setShowToast({ showToast: true, message: 'Dados alterados com sucesso!', color: 'green' });
        }
        window.setTimeout(function () {
          setShowToast({ showToast: false, message: '', color: '' });
        }, 3000);

      });
    } catch (error) {
      console.log(error);
    }
  }, [textEmail]);

  const history = useHistory();
  return (
    <>
      <Header />
      <Container>
        <BoxLogoTheGreatestApp />

        <BoxTypeOfCard>
          <TextTypeOfCard>Change your data</TextTypeOfCard>
          <CardInput>
            <BoxInput label={'Name:'}>
              <TextInput placeholder={dataRedux.name} onChange={text => setTextName(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Email:'}>
              <TextInput placeholder={dataRedux.email} onChange={text => setTextEmail(text.target.value)} type={'text'}></TextInput>
            </BoxInput>
            <BoxInput label={'Password:'}>
              <TextInput type={'password'} onChange={text => setTextPassword(text.target.value)} ></TextInput>
            </BoxInput>
            <ButtonLogin onClick={() => { handleClickButtonUpdate() }}>
              Update
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
