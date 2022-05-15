import AsyncStorage from '@react-native-community/async-storage'
import { persistCombineReducers, persistReducer } from 'redux-persist'

import homeworkSlice from '~store/homeworkSlice'
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

const homeworkSliceConfig = {
  key: 'homework',
  storage: AsyncStorage,
  whitelist: ['homeworks'],
  blacklist: [],
}

export const rootReducer = persistCombineReducers(persistConfig, {
  user: persistReducer(userSliceConfig, userSlice),
  timetable: persistReducer(timetableSliceConfig, timetableSlice),
  homework: persistReducer(homeworkSliceConfig, homeworkSlice),
})

export type RootState = ReturnType<typeof rootReducer>
