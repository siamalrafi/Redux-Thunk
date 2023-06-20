import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
   product: productReducer,
   filter: filterReducer,
});

// export rootReducer reducer
export default rootReducer;
