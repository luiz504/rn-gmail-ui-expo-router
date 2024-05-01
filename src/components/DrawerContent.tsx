import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

import { DrawerButton } from './DrawerButton'
import { CustomOptions } from '~/@types/navigation'

type Props = DrawerContentComponentProps
export const DrawerContent: FC<Props> = (drawerProps) => {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image
          source={require('~/assets/logo.png')}
          alt="logo"
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index

            const options = drawerProps.descriptors[route.key]
              .options as CustomOptions

            if (options.title === undefined) return null

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: 'drawerItemPress',
                canPreventDefault: true,
                target: route.key,
              })

              if (!isFocused && !event.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params)
              }
            }

            return (
              <View key={route.key}>
                {options.sectionTitle && (
                  <Text className="text-gray-400 text-sm font-heading uppercase ml-4 mt-6">
                    {options.sectionTitle}
                  </Text>
                )}
                <DrawerButton
                  title={options.title}
                  iconName={options.iconName}
                  notifications={options.notifications}
                  hasDivider={options.hasDivider}
                  isFocused={isFocused}
                  onPress={onPress}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
