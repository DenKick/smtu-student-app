import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '~api/api'
import { Message } from '~types/messages'

export interface MessagesSliceState {
  isError: boolean
  isLoading: boolean
  messages: Message[]
}

const initialState: MessagesSliceState = {
  messages: [],
  isError: false,
  isLoading: false,
}

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const result = await api.getMessages()
  return result as Message[]
})

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    restoreMessagesSlice: state => {
      state.isError = initialState.isError
      state.messages = initialState.messages
      state.isLoading = initialState.isLoading
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.isError = false
      state.isLoading = false
      state.messages = action.payload
    })
    builder.addCase(fetchMessages.pending, state => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(fetchMessages.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { restoreMessagesSlice } = messagesSlice.actions
export default messagesSlice.reducer
