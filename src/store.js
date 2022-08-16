import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { saveMobileNumber, saveRoomDetail,saveRoomNumber } from "./reducer/Reducer";

const reducer = combineReducers({
  number: saveMobileNumber,
  roomdetail: saveRoomDetail,
  roomNumber:saveRoomNumber
});

const mobileNumberFromStorage = localStorage.getItem("saveMobileNumber")
  ? JSON.parse(localStorage.getItem("saveMobileNumber"))
  : {};



const initialState = {
  number: { mobileNumber: mobileNumberFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
