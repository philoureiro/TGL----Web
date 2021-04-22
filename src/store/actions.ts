import { SAVE_DATA_OF_USER, SAVE_ITENS_OF_CART } from './actiontypes';

export const saveDataOfUser = (name: string, email: string, password: string) => {
  return (
    {
      type: SAVE_DATA_OF_USER,
      name: name,
      email: email,
      password: password,
    }
  )
};

export const saveItensOfCart = (gamesSelecteds: any) => {
  return (
    {
      type: SAVE_ITENS_OF_CART,
      gamesSelecteds: gamesSelecteds
    }
  )
};

