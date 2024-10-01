"use client";
import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext<any>([{ id: 1, cart: 100 }]);
export const CartDispatchContext = createContext<any>(null);

const cartReducer = (carts: any, action: any) => {
  const { type } = action;
  switch (type) {
    case "add": {
      let newCart = carts.some((c: any) => c.id == action.product.id)
        ? carts.map((product: any) => {
            if (product.id == action.product.id) {
              product.cart = action.product.cart;
            }
            return product;
          })
        : [...carts, action.product];
      return newCart;
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
