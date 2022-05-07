import { NativeModules } from 'react-native'
import { Reactotron as ReactotronType } from 'reactotron-core-client'
import Reactotron, { ReactotronReactNative } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

import url from 'url'

let reactotron: (ReactotronType<ReactotronReactNative> & ReactotronReactNative) | undefined

if (__DEV__) {
  const { hostname } = url.parse(NativeModules.SourceCode.scriptURL)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  reactotron = Reactotron.configure({ host: hostname!, port: 9090 }).useReactNative().use(reactotronRedux()).connect()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log = Reactotron.log
}

export default reactotron
