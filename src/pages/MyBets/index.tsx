import React from 'react';
import { Container } from './styles';
import CopyrightBar from '../../components/CopyrightBar';
import Header from '../../components/Header';

interface MyBetsProps {

}

const MyBets: React.FC<MyBetsProps> = () => {
  return (
    <>
      <Header />
      <Container>

      </Container>
      <CopyrightBar />
    </>
  );
};


export default MyBets;
