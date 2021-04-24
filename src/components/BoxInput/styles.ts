import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: #EBEBEB;
  cursor: pointer;

`;

export const InputLabel = styled.h3`
  margin-top: 5px;
  font-family: helvetica;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  color: #9D9D9D;
  height: 30px;

`;

export const Div = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
