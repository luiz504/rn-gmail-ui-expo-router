import { View } from 'react-native'
import { Avatar } from '~/components/Avatar'
import { Input } from '~/components/Input'
import { MenuButton } from '~/components/MenuButton'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 px-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Search" />
        <Avatar source={{ uri: 'https://github.com/luiz504.png' }} />
      </Input>
    </View>
  )
}
