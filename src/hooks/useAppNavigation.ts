import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { TimetableStackRouteParams } from '~types/routes'

const useAppNavigation = () => useNavigation<StackNavigationProp<TimetableStackRouteParams>>()

export default useAppNavigation
