import { constants } from 'node:buffer';
import React from 'react';
import { combineReducers } from 'redux';

import { SAVE_DATA_OF_USER, SAVE_ITENS_OF_CART } from './actiontypes';

interface actionTypes {
  type: string;
  name: string;
  email: string;
  password: string;
  gamesSelecteds: [
    {
      typeGame: string;
      date: string;
      price: number;
      color: string;
      numbersSelecteds: [];
    },
  ];
}

interface IState {
  type: string;
  name: string;
  email: string;
  password: string;
  gamesSelecteds: [];
}

const initialState: IState = {
  type: '',
  name: '',
  email: 'Philipe',
  password: 'Loureiro',
  gamesSelecteds: [],
};


export interface IMainReducer {
  userReducer: actionTypes;
  cartReducer: IState;
}

export const userReducer = (state: IState = initialState, action: actionTypes) => {
  switch (action.type) {
    case SAVE_DATA_OF_USER:
      console.log('reducer ', action);
      return {
        ...state,
        name: (state.name = action.name),
        email: (state.email = action.email),
        password: (state.password = action.password),
      };
    default:
      return state;
  }
};

export const cartReducer = (
  state: IState = initialState,
  action: actionTypes,
) => {
  switch (action.type) {
    case SAVE_ITENS_OF_CART:
      return { ...state, gamesSelecteds: action.gamesSelecteds };

    default:
      return state;
  }
};

const mainReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default mainReducer;
