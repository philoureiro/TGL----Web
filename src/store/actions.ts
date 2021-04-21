import { SAVE_DATA_OF_USER, SAVE_ITENS_OF_CART } from './actiontypes';

export const saveDataOfUser = (email: string, password: string) => ({
  type: SAVE_DATA_OF_USER,
  email: email,
  password: password,
});

export const saveItensOfCart = (gamesSelecteds: any) => {
  console.log('typeof', gamesSelecteds)
  return (
    {
      type: SAVE_ITENS_OF_CART,
      gamesSelecteds: gamesSelecteds
    }
  )
};

