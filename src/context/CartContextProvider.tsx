"use client";
import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext<any>([{ id: 1, cart: 100 }]);
export const CartDispatchContext = createContext<any>(null);

const cartReducer = (state: any, action: any) => {
  const { type } = action;
  switch (type) {
    case type == "add": {
      return [...state];
    }

    default:
      break;
  }
};

type props = {
  children: React.ReactNode;
};

export const CartContextProvider = ({ children }: props) => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={cartDispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  return dispatch;
};
