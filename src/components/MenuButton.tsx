import { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { COLORS } from '~/styles'
import { cn } from '~/utils/cn'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

export const MenuButton: FC<PressableProps> = ({ className, ...rest }) => {
  const navigation = useNavigation()

  const toggleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <Pressable className={cn([className])} {...rest} onPress={toggleMenu}>
      <MaterialIcons name="menu" size={22} color={COLORS.white} />
    </Pressable>
  )
}
