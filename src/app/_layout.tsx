import { FC } from 'react'
import { StatusBar } from 'expo-status-bar'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import '~/styles/global.css'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '~/components/Loading'
import { Slot } from 'expo-router'
const Layout: FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />

      {!fontsLoaded && <Loading size={40} />}
      {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  )
}

export default Layout
