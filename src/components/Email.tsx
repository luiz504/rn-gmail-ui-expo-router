import { FC } from 'react'
import { Text, View } from 'react-native'
import { Avatar } from './Avatar'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '~/styles'
import { EmailType } from '~/mocks/email'

type Props = { data: EmailType }
export const Email: FC<Props> = ({ data }) => {
  const { avatar, name, date, subject, message, star, marker } = data
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {marker === 'important' && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={COLORS.yellow[600]}
            />
          )}
          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {name}
          </Text>

          <Text className="text-sm font-body text-gray-400">{date}</Text>
        </View>

        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {message}
          </Text>

          <MaterialIcons
            name={star ? 'star' : 'star-outline'}
            size={16}
            color={star ? COLORS.yellow[600] : COLORS.blue[600]}
          />
        </View>
      </View>
    </View>
  )
}
