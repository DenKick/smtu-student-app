import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '~store/store'

export const selectHomeworksBySubject = createSelector(
  (state: RootState) => state.homework,
  (_: RootState, subject: string) => subject,
  ({ homeworks }, subject) => homeworks.filter(hw => hw.subject === subject),
)

export const selectNewsByHeading = createSelector(
  (state: RootState) => state.newsAndNotifications.news,
  (_: RootState, heading: string) => heading,
  ({ content }, heading) => content.find(n => n.heading === heading),
)

export const selectNotificationById = createSelector(
  (state: RootState) => state.newsAndNotifications.notifications,
  (_: RootState, id: number) => id,
  ({ content }, id) => content.find(n => n.id === id),
)

export const selectUnreadNotifications = createSelector(
  (state: RootState) => state.newsAndNotifications.notifications,
  (state: RootState) => state.newsAndNotifications.readNotifications,
  ({ content }, unreadNotifications) => content.filter(n => !unreadNotifications.includes(n.id)),
)

export const selectSemester = createSelector(
  (state: RootState) => state.performance.performance,
  (_: RootState) => _,
  performance => {
    const uniqSemesters = new Set(performance.map(s => s.semester.toString()))
    return Array.from(uniqSemesters)
  },
)

export const selectMessagesNames = createSelector(
  (state: RootState) => state.messages.messages,
  (state: RootState) => state.profile.profile,
  (messages, profile) => {
    const names = messages.map(item => [item.from, item.to])
    if (names.length) {
      const uniqNames: Set<string> = new Set(names.reduce((a, b) => a.concat(b)))
      return Array.from(uniqNames).filter(item => item !== profile?.name)
    }
    return []
  },
)
