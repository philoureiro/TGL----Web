
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 100px;
  padding: 30px;
  overflow: hidden;
  background-color: white;
  display: flex;
  min-width: 300px;
  min-height: 50px;
  box-shadow: 0px 0px 5px gray;
  border-radius: 15px;
  border-color: red;
  border-style: solid;
  border-width: 1px;
  justify-content: space-around;
  align-items: center;
  `;

export const TextToast = styled.h3`
  font-family: helvetica;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
`;
