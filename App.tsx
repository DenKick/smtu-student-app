import React from 'react'
import { useColorScheme } from 'react-native'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@emotion/react'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from '~routes/index'
import { store, persistor } from '~store/index'
import { darkTheme } from '~styles/darkTheme'
import { lightTheme } from '~styles/lightTheme'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

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
