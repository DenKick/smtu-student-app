import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackRouteParams } from '~types/routes'

const useAppNavigation = () => useNavigation<StackNavigationProp<StackRouteParams>>()

export default useAppNavigation
