import { TOGGLE_BRAND, TOGGLE_STOCK } from "./actionTypes";

export const toggleFilter = (brandName) => {
   return {
      type: TOGGLE_BRAND,
      payload: brandName,
   };
};

export const toggleStack = () => {
   return {
      type: TOGGLE_STOCK,
   };
};
