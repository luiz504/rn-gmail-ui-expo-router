import { FlatList, Text, View } from 'react-native'

import { Avatar } from '~/components/Avatar'
import { Email } from '~/components/Email'
import { FloatButton } from '~/components/FloatButton'
import { Input } from '~/components/Input'
import { MenuButton } from '~/components/MenuButton'

import { EMAILS } from '~/mocks/email'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 px-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Search" />
        <Avatar
          source={{ uri: 'https://github.com/luiz504.png' }}
          size="small"
        />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Email data={item} />}
        className="mt-6 mb-12"
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle">
            Inbox
          </Text>
        )}
      />

      <FloatButton icon="edit" />
    </View>
  )
}
