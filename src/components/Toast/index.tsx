import React from 'react';
import { Container, TextToast } from './styles';
import { useTransition } from 'react-spring';

interface ToastProps {
  children: any;
  borderColor: string;
  textToast: string;
}
const Toast: React.FC<ToastProps> = ({ children, borderColor, textToast }) => {

  const messagesWithTransitions = useTransition(
    textToast,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (<>
    <Container style={{ borderColor: borderColor }}>
      {children}
      <TextToast>{textToast}</TextToast>
    </Container>
  </>
  );

}
export default Toast;
