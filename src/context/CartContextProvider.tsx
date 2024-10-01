"use client";
import {
  getLocalStorageItem,
  setLocalStorage,
} from "@/helpers/loaclStorageHelper";
import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext<any>([{ id: 1, cart: 100 }]);
export const CartDispatchContext = createContext<any>(null);

const cartReducer = (carts: any, action: any) => {
  const { type } = action;
  switch (type) {
    case "add": {
      let cartInlocalStorage: any = JSON.parse(
        getLocalStorageItem("cart") || "[]"
      );
      let storageNew = cartInlocalStorage.some(
        (c: any) => c.id == action.product.id
      )
        ? cartInlocalStorage.map((product: any, index: number) => {
            if (product.id == action.product.id) {
              return {
                ...product,
                cart: product.cart + 1,
              };
            }
            return product;
          })
        : [...cartInlocalStorage, action.product];

      setLocalStorage("cart", JSON.stringify(storageNew));

      return storageNew;

      // let newCart = carts.some((c: any) => c.id == action.product.id)
      //   ? carts.map((product: any) => {
      //       if (product.id == action.product.id) {
      //         // product.cart = action.product.cart;
      //         product.cart += 1;
      //       }
      //       return product;
      //     })
      //   : [...carts, action.product];

      // return newCart;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
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
