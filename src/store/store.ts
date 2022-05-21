import AsyncStorage from '@react-native-community/async-storage'
import { persistCombineReducers, persistReducer } from 'redux-persist'

import homeworkSlice from '~store/homeworkSlice'
import newsAndNotificationsSlice from '~store/newsAndNotificationsSlice'
import performanceSlice from '~store/performanceSlice'
import profileSlice from '~store/profileSlice'
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

const profileSliceConfig = {
  key: 'profile',
  storage: AsyncStorage,
  whitelist: ['updated', 'profile'],
  blacklist: ['isLoadingProfile', 'isError'],
}

const newsAndNotificationsSliceConfig = {
  key: 'newsAndNotifications',
  storage: AsyncStorage,
  whitelist: ['readNotifications'],
  blacklist: ['news', 'notifications'],
}

const performanceSliceConfig = {
  key: 'performance',
  storage: AsyncStorage,
  whitelist: ['performance'],
  blacklist: ['isLoading', 'isError'],
}

export const rootReducer = persistCombineReducers(persistConfig, {
  user: persistReducer(userSliceConfig, userSlice),
  timetable: persistReducer(timetableSliceConfig, timetableSlice),
  homework: persistReducer(homeworkSliceConfig, homeworkSlice),
  profile: persistReducer(profileSliceConfig, profileSlice),
  newsAndNotifications: persistReducer(newsAndNotificationsSliceConfig, newsAndNotificationsSlice),
  performance: persistReducer(performanceSliceConfig, performanceSlice),
})

export type RootState = ReturnType<typeof rootReducer>
