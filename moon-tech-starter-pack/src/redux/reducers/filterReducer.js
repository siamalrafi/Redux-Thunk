import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
   filters: {
      brand: [],
      stack: false,
   },
   keyword: "",
};

export const filterReducer = (state = initialState, action) => {
   // console.log(action.payload); // available actions

   switch (action.type) {
      case TOGGLE_BRAND:
         if (state.filters.brand.includes(action.payload)) {
            return {
               ...state,
               filters: {
                  ...state.filters,
                  brand: [...state.filters.brand, action.payload],
               },
            };
         } else {
            return {
               ...state,
               filters: {
                  ...state.filters,
                  brand: state.filters.brand.filter((brand) => brand !== action.payload),
               },
            };
         }
      case TOGGLE_STOCK:
         return {
            ...state,
            filters: {
               ...state.filters,
               stack: !state.filters.stack,
            },
         };
      default:
         break;
   }
   return state;
};
