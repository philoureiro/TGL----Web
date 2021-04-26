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
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { IMainReducer } from '../../store/reducers';
import { saveDataOfUser } from '../../store/actions';



interface RecoveryPasswordProps {

}

const RecoveryPassword: React.FC<RecoveryPasswordProps> = () => {

  const [textEmail, setTextEmail] = useState('');
  const [textName, setTextName] = useState('');
  const [textPassword, setTextPassword] = useState('');

  console.log(textEmail, textName, textPassword);

  const dispatch = useDispatch();
  const dataRedux = useSelector(
    (state: IMainReducer) => state.userReducer,
  );
  console.log(dataRedux);
  console.log(textPassword);


  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    password: Yup.string().required().min(6),
  });

  const handleClickButtonRecovery = useCallback(() => {
    try {
      schema.isValid({
        email: textEmail,
        name: textName,
        password: textPassword,
      }).then(function (valid) {
        if (!valid) {
          window.alert('Dados inválidos ou repetidos! verifique...');
        } else {
          dispatch(saveDataOfUser(textName, textEmail, textPassword));
          window.alert('Dados alterados com sucesso!');
        }
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
            <ButtonLogin onClick={() => { handleClickButtonRecovery() }}>
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
      </Container>
      <CopyrightBar />
    </>
  );
};


export default RecoveryPassword;
