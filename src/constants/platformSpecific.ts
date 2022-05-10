import { KeyboardAvoidingViewProps, KeyboardEventName, Platform } from 'react-native'

export const keyboardShowEvent: KeyboardEventName = Platform.select({
  ios: 'keyboardWillShow',
  default: 'keyboardDidShow',
})
export const keyboardHideEvent: KeyboardEventName = Platform.select({
  ios: 'keyboardWillHide',
  default: 'keyboardDidHide',
})

export const animationTiming = Platform.select({ ios: 300, default: 150 })

export const keyboardAvoidingViewBehavior: KeyboardAvoidingViewProps['behavior'] = Platform.select({
  ios: 'padding',
  default: 'height',
})
