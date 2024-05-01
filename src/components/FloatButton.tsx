import { FC } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { COLORS } from '~/styles'

import { cn } from '~/utils/cn'

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
}
export const FloatButton: FC<FloatButtonProps> = ({
  className,
  icon,
  ...rest
}) => {
  return (
    <TouchableOpacity
      className={cn([
        'absolute bottom-4 right-4',
        'px-8 py-4 bg-gray-600 rounded-full gap-1',
        'flex-row items-center',
        className,
      ])}
      activeOpacity={0.7}
      {...rest}
    >
      {icon && (
        <MaterialIcons name={icon} size={24} color={COLORS.orange[500]} />
      )}

      <Text className="font-subtitle text-orange-400">Write</Text>
    </TouchableOpacity>
  )
}
