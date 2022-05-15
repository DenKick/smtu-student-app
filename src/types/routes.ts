import { FC } from 'react'

export enum RoutesNames {
  Account = 'ACCOUNT_SCREEN',
  Auth = 'AUTH_SCREEN',
  Homework = 'HOMEWORK_SCREEN',
  Performance = 'PERFORMANCE_SCREEN',
  Timetable = 'TIMETABLE_SCREEN',
  Subject = 'SUBJECT_SCREEN',
  PlatformNavigation = 'PLATFORM_NAVIGATION',
}

export interface StackRouteParams {
  [RoutesNames.Timetable]: undefined
  [RoutesNames.Subject]: { title: string; teacher: string | null }
  [key: string]: object | undefined
}

export interface Route {
  name: RoutesNames
  screen: FC
}
