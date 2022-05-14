import AsyncStorage from '@react-native-community/async-storage'
import { Reducer } from '@reduxjs/toolkit'
import { persistCombineReducers, persistReducer } from 'redux-persist'

import timetableSlice from '~store/timetableSlice'
import userSlice from '~store/userSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'timetable'],
  blacklist: [],
}

const userSliceConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['isAuthorized', 'user'],
  blacklist: [],
}

const timetableSliceConfig = {
  key: 'timetable',
  storage: AsyncStorage,
  whitelist: ['timetable', 'updated'],
  blacklist: ['isLoadingTimetable', 'isError'],
}

export const rootReducer: Reducer = persistCombineReducers(persistConfig, {
  user: persistReducer(userSliceConfig, userSlice),
  timetable: persistReducer(timetableSliceConfig, timetableSlice),
})

export type RootState = ReturnType<typeof rootReducer>
