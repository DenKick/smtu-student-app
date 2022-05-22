import React from 'react'
import { Platform, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'

import { ThemeProvider } from '@emotion/react'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from '~routes/index'
import { store, persistor } from '~store/index'
import { AndroidDarkTheme } from '~styles/AndroidDarkTheme'
import { AndroidLightTheme } from '~styles/AndroidLightTheme'
import { IOSDarkTheme } from '~styles/IOSDarkTheme'
import { IOSLightTheme } from '~styles/IOSLightTheme'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const lightTheme = Platform.select({ ios: IOSLightTheme, default: AndroidLightTheme })
  const darkTheme = Platform.select({ ios: IOSDarkTheme, default: AndroidDarkTheme })

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
