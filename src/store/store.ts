import AsyncStorage from '@react-native-community/async-storage'
import { persistCombineReducers, persistReducer } from 'redux-persist'

import userSlice from './userSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  blacklist: [],
}

const userSliceConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['isAuthorized', 'user'],
  blacklist: [],
}

export const rootReducer = persistCombineReducers(persistConfig, {
  user: persistReducer(userSliceConfig, userSlice),
})
export type RootState = ReturnType<typeof rootReducer>
