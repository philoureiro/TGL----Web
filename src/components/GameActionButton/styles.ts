import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  display: flex;
  height: 60px;
  background-color: #000;
  justify-content:center;
  align-items: center;
  border-radius: 15px;
  outline: none;
  &:hover{
        background: ${shade(0.1, '#E2E2E2')};
      }
`;

export const TextButton = styled.h3`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 24px;
  color: #fff;
`;
