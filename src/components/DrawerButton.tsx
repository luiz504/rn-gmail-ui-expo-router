import React, { FC } from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { COLORS } from '~/styles'
import { cn } from '~/utils/cn'
export type IconNameProps = keyof typeof MaterialIcons.glyphMap
type Props = {
  title: string
  isFocused?: boolean
  hasDivider?: boolean
  iconName: IconNameProps
  notifications?: number
} & PressableProps
export const DrawerButton: FC<Props> = ({
  title,
  iconName,
  hasDivider = false,
  isFocused = false,
  notifications,
  className,
  ...rest
}) => {
  return (
    <Pressable
      className={cn([
        'py-2 w-full',
        className,
        hasDivider && 'border-b border-gray-500 ml-10',
      ])}
      {...rest}
    >
      <View
        className={cn([
          'flex-row gap-4 items-center h-14 px-6 -ml-2 w-full',
          { 'bg-orange-800': isFocused, '-ml-12 rounded-r-full': hasDivider },
        ])}
      >
        <MaterialIcons
          name={iconName}
          size={20}
          color={isFocused ? COLORS.orange[300] : COLORS.gray[400]}
        />
        <Text
          className={cn([
            'text-white font-subtitle text-base flex-1',

            { 'text-orange-300': isFocused },
          ])}
        >
          {title}
        </Text>
        <Text
          className={cn([
            'text-gray-400 text-sm font-body',
            { 'text-orange-300': isFocused },
          ])}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}
