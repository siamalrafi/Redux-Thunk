import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

// create store for app
const store = createStore(rootReducer, composeWithDevTools());

export default store;
