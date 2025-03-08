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
      // action.payload = { product, quantity }
      // Verificamos si el producto ya existe en el carrito
      const existingItem = state.cart.find(
        (item) => item.product._id === action.payload.product._id
      );

      if (existingItem) {
        // Si ya existe, aumentamos la cantidad
        const updatedCart = state.cart.map((item) =>
          item.product._id === existingItem.product._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        // Si no existe, lo agregamos al array
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }

    case 'REMOVE_FROM_CART': {
      // action.payload = productId
      const updatedCart = state.cart.filter(
        (item) => item.product._id !== action.payload
      );
      return { ...state, cart: updatedCart };
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
