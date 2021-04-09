import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  height: 50px;
  border-radius: 30px;
  margin-right: 30px;
  outline: none;
  border-width: 3px;
  border-style: solid;


  &:hover{
        background: ${shade(0.1, '#E2E2E2')};
      }
`;

export const ButtonText = styled.h3`
  font-size: 20px;
  color: #fff;
  font-family: helvetica;
  font-weight: bold;
  font-style: italic;
`;

