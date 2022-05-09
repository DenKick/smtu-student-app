import { FC } from 'react'

export enum RoutesNames {
  Auth = 'AUTH_SCREEN',
  Timetable = 'TIMETABLE_SCREEN',
  Homework = 'HOMEWORK_SCREEN',
  Account = 'ACCOUNT_SCREEN',
  Other = 'OTHER_SCREEN', // This is temporary TODO: Replace for normal screen
}

export interface Route {
  name: RoutesNames
  screen: FC
}
