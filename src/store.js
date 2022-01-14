import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productsListReducer,
  productDetailsReducer,
} from './reducers/productReducers';

// import { cartReducer } from './reducers/cartReducers';
// import {
//   userLoginReducer,
//   userRegisterReducer,
//   userDetailsReducer,
//   userUpdateProfileReducer,
// } from './reducers/userReducers';
// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
// } from './reducers/orderReducers';

const reducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
});
const middleware = [thunk];
const initialState = {
  cart: {
    // cartItems: cartItemsFromStorage,
    // shippingAddress: shippingAddressFromStorage,
  },
  // userLogin: { userInfo: userInfoFromStorage },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
