import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  display: flex;
  height: 70px;
  justify-content:center;
  align-items: center;
  border-radius: 15px;
  border-width: 3px;
  border-style: solid;
  outline: none;
      @media(max-width: 550px){
        background-color:red;
        margin-left: 10px;
        margin-right: 10px;
      }
`;

export const TextButton = styled.h3`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 24px;
  color: #fff;

  @media(max-width: 900px){
    font-size: 16px ;
  }
`;
