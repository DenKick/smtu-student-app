import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import api from '~api/api'

export interface UserSliceState {
  isAuthorized: boolean
  isLoadingUser: boolean
  user: string | null
  token: string | null
}

const initialState: UserSliceState = {
  isAuthorized: false,
  isLoadingUser: false,
  user: null,
  token: null,
}

export const createUserLogin = createAsyncThunk('user/createUserLogin', async () => {
  const response = await api.login()
  return response.token
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload
    },
    restoreUserSliceState: state => {
      state.user = initialState.user
      state.isAuthorized = initialState.isAuthorized
      state.token = initialState.token
    },
  },
  extraReducers: builder => {
    builder.addCase(createUserLogin.fulfilled, (state, action) => {
      state.isAuthorized = true
      state.isLoadingUser = false
      state.token = action.payload
    })
    builder.addCase(createUserLogin.pending, state => {
      state.isLoadingUser = true
    })
    builder.addCase(createUserLogin.rejected, state => {
      state.isLoadingUser = false
      state.user = initialState.user
    })
  },
})

export const { restoreUserSliceState, setUser } = userSlice.actions
export default userSlice.reducer
