import HomeworkScreen from '~screens/HomeworkScreen'
import TimetableScreen from '~screens/TimetableScreen'
import { Route, RoutesNames } from '~types/routes'

export const routesConfig: Route[] = [
  {
    name: RoutesNames.Timetable,
    screen: TimetableScreen,
  },
  {
    name: RoutesNames.Homework,
    screen: HomeworkScreen,
  },
  {
    name: RoutesNames.Other,
    screen: TimetableScreen,
  },
  {
    name: RoutesNames.Account,
    screen: TimetableScreen,
  },
]
