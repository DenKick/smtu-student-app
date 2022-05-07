import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserSliceState {
  isAuthorized: boolean
  user: string | null
}

const initialState: UserSliceState = {
  isAuthorized: false,
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthorized: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload
    },
    setUser: state => {
      state.user = 'Denis'
    },
    restoreUserSliceState: state => {
      state.user = initialState.user
      state.isAuthorized = initialState.isAuthorized
    },
  },
})

export const { setIsAuthorized, restoreUserSliceState, setUser } = userSlice.actions
export default userSlice.reducer
