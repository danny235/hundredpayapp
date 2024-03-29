import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {createTransform, persistReducer, persistStore} from 'redux-persist';
import userReducer, {logOut} from '../features/user/userSlice';

import Flatted from 'flatted';

export const transformCircular = createTransform(
  (inboundState, key) => Flatted.stringify(inboundState),
  (outboundState, key) => Flatted.parse(outboundState),
);

const persistConfig = {
  key: 'hundred-pay',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);

export const logoutUser = () => {
  persistor.purge();
  persistor.flush();
  store.dispatch(logOut());
};
