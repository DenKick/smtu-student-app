import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '~store/store'

export const selectHomeworksBySubject = createSelector(
  (state: RootState) => state.homework,
  (_: RootState, subject: string) => subject,
  ({ homeworks }, subject) => homeworks.filter(hw => hw.subject === subject),
)
