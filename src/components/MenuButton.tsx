import { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { COLORS } from '~/styles'
import { cn } from '~/utils/cn'

export const MenuButton: FC<PressableProps> = ({ className, ...rest }) => {
  return (
    <Pressable className={cn([className])} {...rest}>
      <MaterialIcons name="menu" size={22} color={COLORS.white} />
    </Pressable>
  )
}
