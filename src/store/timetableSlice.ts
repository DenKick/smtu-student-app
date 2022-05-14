import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import api from '~api/api'
import { SubjectTimetable } from '~types/timetable'

export interface TimetableSliceState {
  timetable: SubjectTimetable[]
  isLoadingTimetable: boolean
  isError: boolean
  updated: Date | null
}

const initialState: TimetableSliceState = {
  timetable: [],
  isLoadingTimetable: false,
  isError: false,
  updated: null,
}

export const fetchTimetable = createAsyncThunk('timetable/fetchTimetable', async () => {
  const response = await api.getTimetable()
  return response as SubjectTimetable[]
})

export const timetableSlice = createSlice({
  name: 'timetable',
  initialState,
  reducers: {
    setUpdated: state => {
      state.updated = new Date()
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTimetable.fulfilled, (state, action: PayloadAction<SubjectTimetable[]>) => {
      state.updated = new Date()
      state.isLoadingTimetable = false
      state.timetable = action.payload
    })
    builder.addCase(fetchTimetable.pending, state => {
      state.isLoadingTimetable = true
    })
    builder.addCase(fetchTimetable.rejected, state => {
      state.isError = true
      state.isLoadingTimetable = false
    })
  },
})

export const { setUpdated } = timetableSlice.actions
export default timetableSlice.reducer
