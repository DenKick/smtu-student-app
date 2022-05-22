import { FC } from 'react'

export enum RoutesNames {
  News = 'NEWS',
  Auth = 'AUTH_SCREEN',
  Messages = 'MESSAGES',
  Account = 'ACCOUNT_SCREEN',
  Subject = 'SUBJECT_SCREEN',
  Homework = 'HOMEWORK_SCREEN',
  NewsDetails = 'NEWS_DETAILS',
  Timetable = 'TIMETABLE_SCREEN',
  Notifications = 'NOTIFICATIONS',
  Performance = 'PERFORMANCE_SCREEN',
  ProfileDetails = 'PROFILE_DETAILS',
  MessagesDetails = 'MESSAGES_DETAILS',
  PlatformNavigation = 'PLATFORM_NAVIGATION',
  NotificationDetails = 'NOTIFICATION_DETAILS',
}

export interface StackRouteParams {
  [RoutesNames.News]: undefined
  [RoutesNames.Messages]: undefined
  [RoutesNames.Timetable]: undefined
  [RoutesNames.Notifications]: undefined
  [RoutesNames.ProfileDetails]: undefined
  [RoutesNames.MessagesDetails]: { title: string }
  [RoutesNames.NewsDetails]: { newsHeading: string }
  [RoutesNames.Subject]: { title: string; teacher: string | null }
  [RoutesNames.NotificationDetails]: { id: number; heading: string }
  [key: string]: object | undefined
}

export interface Route {
  name: RoutesNames
  screen: FC
}
