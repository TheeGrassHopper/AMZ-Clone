export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'ADD_BASKET_VALUE':
      return {
        ...state,
        basket: [...state.basket, action.item.price]
      };
    case 'REMOVE_FROM_BASKET':
        console.log(state)
        const index = state.basket.findIndex((item) => item.id === action.id);
        let newBasket = [...state.basket];

        if (index >= 0) {
          newBasket.splice(index, 1)
        } else {
          console.warn ( `Can't remove product (id: ${action.id} as its not in basket!`)
        }
      return {
          ...state, basket: newBasket
      };
    default:
      return state;
  }
};

export default reducer;
