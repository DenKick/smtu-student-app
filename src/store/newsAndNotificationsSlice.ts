import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import api from '~api/api'
import { News, Notification } from '~types/newsAndNotifications'

export interface TimetableSliceState {
  news: {
    content: News[]
    isLoading: boolean
    isError: boolean
  }
  notifications: {
    content: Notification[]
    isLoading: boolean
    isError: boolean
  }
  readNotifications: number[]
}

const initialState: TimetableSliceState = {
  news: {
    content: [],
    isLoading: false,
    isError: false,
  },
  notifications: {
    content: [],
    isLoading: false,
    isError: false,
  },
  readNotifications: [],
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const result = await api.getNews()
  return result as News[]
})

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async () => {
  const result = await api.getNotifications()
  return result as Notification[]
})

export const newsAndNotificationsSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {
    addReadNotification: (state, action: PayloadAction<number>) => {
      state.readNotifications = [...state.readNotifications, action.payload]
    },
    restoreNewsAndNotificationsSlice: state => {
      state.news = initialState.news
      state.notifications = initialState.notifications
      state.readNotifications = initialState.readNotifications
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news.isError = false
      state.news.isLoading = false
      state.news.content = action.payload
    })
    builder.addCase(fetchNews.pending, state => {
      state.news.isError = false
      state.news.isLoading = true
    })
    builder.addCase(fetchNews.rejected, state => {
      state.news.isError = true
      state.news.isLoading = false
    })
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications.isError = false
      state.notifications.isLoading = false
      state.notifications.content = action.payload
    })
    builder.addCase(fetchNotifications.pending, state => {
      state.notifications.isError = false
      state.notifications.isLoading = true
    })
    builder.addCase(fetchNotifications.rejected, state => {
      state.notifications.isError = true
      state.notifications.isLoading = false
    })
  },
})

export const { restoreNewsAndNotificationsSlice, addReadNotification } = newsAndNotificationsSlice.actions
export default newsAndNotificationsSlice.reducer
