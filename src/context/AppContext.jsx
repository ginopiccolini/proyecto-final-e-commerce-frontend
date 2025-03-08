// src/context/AppContext.jsx
import React, { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'ADD_TO_CART': {
      // Verifica si el producto ya existe en el carrito
      const existingItem = state.cart.find(
        (item) => item.product._id === action.payload.product._id
      );
      if (existingItem) {
        // Aumenta la cantidad si ya existe
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product._id === existingItem.product._id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, action.payload] };
    }

    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.product._id !== action.payload) };

    case 'UPDATE_QUANTITY': {
      // action.payload: { productId, quantity }
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.product._id === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter(item => item.quantity > 0) // Si la cantidad es 0, se elimina del carrito
      };
    }

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
