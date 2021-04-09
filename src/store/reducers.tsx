import createStore from 'redux';

import {
  SET_ARRAY_ALL_TYPES_GAME_BUTTONS_WAS_MARKED,
  SET_JUST_ONE_TYPE_GAME_BUTTON_WAS_MARKED
} from './actionTypes';

interface ActionTypes {
  type: any;
  nameButton: string;
}

let initialState = {
  data_just_one_type_game_is_marked: String,
  data_All_types_games_is_markeds: Array.prototype,
};

export const mainReducer = (state = initialState, action: ActionTypes) => {

  switch (action.type) {
    case SET_JUST_ONE_TYPE_GAME_BUTTON_WAS_MARKED:
      console.log('#REDUX: Vai trocar apenas 1 tipo de jogo.');
      console.log('TROCADO PARA =>' + action.nameButton);
      return {
        ...state, data_just_one_type_game_is_marked: action.nameButton
      };

    case SET_ARRAY_ALL_TYPES_GAME_BUTTONS_WAS_MARKED:

      let currentArray = state.data_All_types_games_is_markeds;
      currentArray.push(action.nameButton);
      console.log(currentArray)

      console.log('#REDUX: Acrescentou mais um.');

      return {
        ...state, data_All_types_games_is_markeds: currentArray
      };


    default:
      return state;
  }
};



/**
 *
 * export const mainReducer = (state = initialState, action: ActionTypes) => {

  switch (action.type) {
    case SET_JUST_ONE_TYPE_GAME_BUTTON_WAS_MARKED:
      console.log('#REDUX: Vai trocar apenas 1 tipo de jogo.');
      console.log('TROCADO PARA =>' + action.nameButton);
      return {
        ...state, data_just_one_type_game_is_marked: action.nameButton
      };

    case SET_ARRAY_ALL_TYPES_GAME_BUTTONS_WAS_MARKED:

      let currentArray = state.data_All_types_games_is_markeds;
      currentArray.push(action.nameButton);

      console.log('#REDUX: Acrescentou mais um.');

      return {
        ...state, data_All_types_games_is_markededs: currentArray
      };


    default:
      return state;
  }
};





export function setArrayAllNumbersSelectdsReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_ARRAY_ALL_TYPES_GAME_BUTTONS_WAS_MARKED:

      let currentArray = state.data_All_types_games_is_markeds;
      currentArray.push(action.nameButton);

      console.log('#REDUX: Acrescentou mais um.');

      return {
        ...state, data_All_types_games_is_markededs: currentArray
      };

    default:
      return state
  }
}

export function setJustOneNumberSelectedReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_JUST_ONE_TYPE_GAME_BUTTON_WAS_MARKED:

      console.log('#REDUX: Vai trocar apenas 1 tipo de jogo.');
      console.log('TROCADO PARA =>' + action.nameButton);

      return {
        ...state, data_just_one_type_game_is_marked: action.nameButton
      };

  }
}


 *
 *
 */
