import { FC } from 'react'

export enum RoutesNames {
  Account = 'ACCOUNT_SCREEN',
  Auth = 'AUTH_SCREEN',
  Homework = 'HOMEWORK_SCREEN',
  Performance = 'PERFORMANCE_SCREEN',
  Timetable = 'TIMETABLE_SCREEN',
}

export interface Route {
  name: RoutesNames
  screen: FC
}
