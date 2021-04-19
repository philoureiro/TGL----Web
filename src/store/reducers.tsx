import React from 'react';
import { combineReducers } from 'redux';

import { SAVE_DATA_OF_USER, SAVE_ITENS_OF_CART } from './actiontypes';

interface actionTypes {
  type: string,
  email: string,
  password: string,
  gamesSelecteds: {
    typeGame: string,
    price: number,
    color: string,
    numbersSelecteds: []
  }
};


const initialState = {
  email: 'Philipe',
  password: 'Loureiro',
  gamesSelecteds: {},
}



export const userReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case SAVE_DATA_OF_USER:
      return {
        ...state, email: (state.email = action.email),
        password: (state.password = action.password)
      };
    default:
      return state;
  }
}


export const cartReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {

    case SAVE_ITENS_OF_CART:
      return { ...state, gamesSelecteds: (state.gamesSelecteds = action.gamesSelecteds) }

    default:
      return state;
  }
}


const mainReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default mainReducer;
