import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import UserReducer from "./user/UserReducer";
import CartReducer from "./cart/CartReducer";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/DirectoryReducer";
import shopReducer from "./shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
