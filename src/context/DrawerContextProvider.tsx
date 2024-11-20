"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export const DrawerContext = createContext<any>({});

interface IDrawer {
  children: ReactNode;
}

export const DrawerContextProvider = (props: IDrawer) => {
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const handleShowByDrawerContext = () => {
    setVisible(true);
  };
  const handleHideByDrawerContext = () => {
    setVisible(false);
  };

  return (
    <>
      <DrawerContext.Provider
        value={{
          isVisibleByDrawerContext: visible,
          handleShowByDrawerContext,
          handleHideByDrawerContext,
        }}
      >
        {children}
      </DrawerContext.Provider>
    </>
  );
};

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

// import { createContext, ReactNode, useContext, useReducer } from "react";
// interface IDrawer {
//   children: ReactNode;
// }

// export const DrawerContext = createContext<boolean>(false);
// export const DrawerContextDispatch = createContext<any>("");

// const drawerReducer = (state: any, action: any) => {
//   const { type } = action;
//   switch (type) {
//     case "show": {
//       state = true;
//       return state;
//     }
//     case "hide": {
//       state = false;
//       return state;
//     }
//     default:
//       break;
//   }
// };

// export const DrawerContextProvider = (props: IDrawer) => {
//   const { children } = props;
//   const [drawerContext, dispatchDrawer] = useReducer(drawerReducer, false);
//   return (
//     <>
//       <DrawerContext.Provider value={drawerContext}>
//         <DrawerContextDispatch.Provider value={dispatchDrawer}>
//           {children}
//         </DrawerContextDispatch.Provider>
//       </DrawerContext.Provider>
//     </>
//   );
// };

// export const useDrawerContext = () => {
//   return useContext(DrawerContext);
// };
// export const useDrawerContextDispatch = () => {
//   return useContext(DrawerContextDispatch);
// };
