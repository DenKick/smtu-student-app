import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Homework } from '~types/homework'

export interface TimetableSliceState {
  homeworks: Homework[]
}

const initialState: TimetableSliceState = {
  homeworks: [],
}

export const homeworkSlice = createSlice({
  name: 'homework',
  initialState,
  reducers: {
    addHomework: (state, { payload }: PayloadAction<Homework>) => {
      state.homeworks = [...state.homeworks, payload]
    },
    removeHomework: (state, action: PayloadAction<Homework>) => {
      state.homeworks = state.homeworks.filter(item => item.id !== action.payload.id)
    },
  },
})

export const { addHomework, removeHomework } = homeworkSlice.actions
export default homeworkSlice.reducer
