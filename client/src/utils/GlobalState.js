import React, { createContext, useContext } from "react";
//createContext creates the container to hold our global state data and functionality
//useContext allows use of sate created from createContext
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
//Provider makes the state data that's passed into it as a prop available to all other components
const { Provider } = StoreContext;

//state - most up to date global state
//dispatch - method to update state
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  //use this to confirm it works
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
