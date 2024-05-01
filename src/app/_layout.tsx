import { FC } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import '~/styles/global.css'

import { Loading } from '~/components/Loading'

const Layout: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />

      {!fontsLoaded && <Loading size={40} />}

      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}

export default Layout
