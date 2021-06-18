import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import asignacionReducer from "./asgDucks";

import empeladoReducer from "./empDucks";
import pagosReducer from "./payDucks";
import proyectoReducer from "./projDucks";

const rootReducer = combineReducers({
  emp: empeladoReducer,
  proj: proyectoReducer,
  pay: pagosReducer,
  asg: asignacionReducer,
});

/* Extension de Google Chrome, https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
