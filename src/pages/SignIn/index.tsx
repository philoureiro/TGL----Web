import React from 'react';
import { Container } from './styles';
import CardInput from '../../components/CardInput';
import BoxLogoTheGreatestApp from '../../components/BoxLogoTheGreatestApp';
interface SignInProps {

}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <Container>
      <BoxLogoTheGreatestApp />
    </Container>
  );
};


export default SignIn;
