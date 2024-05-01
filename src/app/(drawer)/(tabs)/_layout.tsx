import { MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { COLORS } from '~/styles'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.gray[600],
          borderTopWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 14,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.orange[500],
        tabBarInactiveTintColor: COLORS.gray[400],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="email" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meetings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="videocam" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
