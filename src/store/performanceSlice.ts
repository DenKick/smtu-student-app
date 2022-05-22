import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import api from '~api/api'
import { Performance } from '~types/performance'

export interface PerformanceSliceState {
  performance: Performance[]
  isLoading: boolean
  isError: boolean
}

const initialState: PerformanceSliceState = {
  performance: [],
  isLoading: false,
  isError: false,
}

export const fetchPerformance = createAsyncThunk('performance/fetchPerformance', async () => {
  const result = await api.getPerformance()
  return result as Performance[]
})

export const performanceSlice = createSlice({
  name: 'performance',
  initialState,
  reducers: {
    restorePerformanceSlice: state => {
      state.isError = initialState.isError
      state.isLoading = initialState.isLoading
      state.performance = initialState.performance
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPerformance.fulfilled, (state, action) => {
      state.isError = false
      state.isLoading = false
      state.performance = action.payload
    })
    builder.addCase(fetchPerformance.pending, state => {
      state.isError = false
      state.isLoading = true
    })
    builder.addCase(fetchPerformance.rejected, state => {
      state.isError = true
      state.isLoading = false
    })
  },
})

export const { restorePerformanceSlice } = performanceSlice.actions
export default performanceSlice.reducer
