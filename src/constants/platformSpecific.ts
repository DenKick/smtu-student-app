import { Platform } from 'react-native'

export const keyboardShowEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow'
export const keyboardHideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide'

export const animationTiming = Platform.OS === 'ios' ? 300 : 150
