import AccountScreen from '~screens/AccountScreen'
import HomeworkScreen from '~screens/HomeworkScreen'
import PerformanceScreen from '~screens/PerformanceScreen'
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
    name: RoutesNames.Performance,
    screen: PerformanceScreen,
  },
  {
    name: RoutesNames.Account,
    screen: AccountScreen,
  },
]
