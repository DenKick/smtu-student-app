import { useDispatch } from 'react-redux'

import { ConfigureStoreOptions, configureStore, Dispatch, AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

import reactotron from '~lib/reactotron'
import { restoreHomeworkSlice } from '~store/homeworkSlice'
import { restoreProfileSlice } from '~store/profileSlice'
import { rootReducer, RootState } from '~store/store'
import { restoreTimetableSlice } from '~store/timetableSlice'
import { restoreUserSliceState } from '~store/userSlice'

const defaultMiddlewares = {
  serializableCheck: false,
  immutableCheck: false,
  thunk: true,
}

const options: ConfigureStoreOptions = {
  reducer: rootReducer,
  middleware: getDefaultMiddlewares => getDefaultMiddlewares(defaultMiddlewares).concat([]).prepend([]),
  enhancers: process.env.NODE_ENV === 'development' && reactotron?.createEnhancer ? [reactotron.createEnhancer()] : [],
}

export const store = configureStore(options)
export const persistor = persistStore(store)

export const clearStore = (dispatch: Dispatch) => {
  dispatch(restoreProfileSlice())
  dispatch(restoreHomeworkSlice())
  dispatch(restoreTimetableSlice())
  dispatch(restoreUserSliceState())
}

// TODO See what's happening, when i use default store.dispatch type
type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<{ appState: RootState }, null, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
