import { create } from "zustand";

function mainFunctionForUseStore(set) {
  return {
    count: 0,
    cart: [],
    addToCart: function (product) {
      set(function(state){
        return {
          ...state,
          cart: [...state.cart, product],
        }
      })
    },
    removeFromCart: function () {},
    incrementCount: function () {
      set(function (state) {
        return {
          count: state.count + 1,
        };
      });
    },
    test: "test",
    setTest: null,
  };
}

const useStore = create(mainFunctionForUseStore);

export default useStore;

/**
 * (set) => {
  return {
    test: "test",
    count: 0,
    incrementCount: () => {
      set(function (state) {
        return {
          count: state.count + 1,
        };
      });
    },
  };
}
 * 
 * 
 * 
 */
