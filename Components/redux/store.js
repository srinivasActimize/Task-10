import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./Reducer/rootReducer";
import { thunk } from "redux-thunk";
// import  thunk  from "redux-thunk";
const middleware = [thunk];
 
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;

// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./Reducer/rootReducer";

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

// export default store;
