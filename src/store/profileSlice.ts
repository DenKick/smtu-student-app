import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import api from '~api/api'
import { Profile } from '~types/profile'

export interface ProfileSliceState {
  profile: Profile | null
  isLoadingProfile: boolean
  isError: boolean
  updated: Date | null
}

const initialState: ProfileSliceState = {
  profile: null,
  isLoadingProfile: false,
  isError: false,
  updated: null,
}

export const fetchUserInfo = createAsyncThunk('profile/fetchUserInfo', async () => {
  const response = await api.getUserInfo()
  return response as Profile
})

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUpdated: state => {
      state.updated = new Date()
    },
    restoreProfileSlice: state => {
      state.updated = initialState.updated
      state.profile = initialState.profile
      state.isError = initialState.isError
      state.isLoadingProfile = initialState.isLoadingProfile
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.updated = new Date()
      state.isLoadingProfile = false
      state.profile = action.payload
    })
    builder.addCase(fetchUserInfo.pending, state => {
      state.isLoadingProfile = true
    })
    builder.addCase(fetchUserInfo.rejected, state => {
      state.isError = true
      state.isLoadingProfile = false
    })
  },
})

export const { setUpdated, restoreProfileSlice } = profileSlice.actions
export default profileSlice.reducer
