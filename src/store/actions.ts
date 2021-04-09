import {
  SET_JUST_ONE_TYPE_GAME_BUTTON_WAS_MARKED,
  SET_ARRAY_ALL_TYPES_GAME_BUTTONS_WAS_MARKED,
} from './actionTypes';

export const setJustOneTypeGameButtonWasMarked = (idButton: string) => ({
  type: SET_JUST_ONE_TYPE_GAME_BUTTON_WAS_MARKED,
  nameButton: idButton,
});


export const setArrayAllTypesGameButtonsWasMarked = (idButton: string) => ({
  type: SET_ARRAY_ALL_TYPES_GAME_BUTTONS_WAS_MARKED,
  nameButton: idButton,
});
