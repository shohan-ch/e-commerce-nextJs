"use client";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
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
    }

    case "remove": {
      const { product } = action;
      let cartInlocalStorage: any = JSON.parse(
        getLocalStorageItem("cart") || "[]"
      );

      let filterStorage = cartInlocalStorage.some(
        (s: any) => s.id == product.id
      )
        ? cartInlocalStorage.map((c: any) => {
            if (c.id == product.id) {
              let p = { ...c, cart: c.cart - 1 };
              return p;
            }
            return c;
          })
        : [...cartInlocalStorage];

      filterStorage = filterStorage.filter((c: any) => c.cart != 0);
      setLocalStorage("cart", JSON.stringify(filterStorage));
      return filterStorage;
    }

    case "removeAll": {
      const removeCarts = removeLocalStorageItem("cart");
      return [];
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
  let cartFormLocalStorage = JSON.parse(getLocalStorageItem("cart") || "[]");
  const cart = useContext(CartContext);

  return cartFormLocalStorage || cart;
};
export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  return dispatch;
};
