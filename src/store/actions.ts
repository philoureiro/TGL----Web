import { SAVE_DATA_OF_USER, SAVE_ITENS_OF_CART } from './actiontypes';

export const saveDataOfUser = (email: string, password: string) => ({
  type: SAVE_DATA_OF_USER,
  email: email,
  password: password,
});

export const saveItensOfCart = (typeGame: string, price: number, color: string, numbersSelecteds: any) => ({
  type: SAVE_ITENS_OF_CART,
  gamesSelecteds: {
    typeGame: typeGame,
    price: price,
    color: color,
    numbersSelecteds: numbersSelecteds
  }
});

