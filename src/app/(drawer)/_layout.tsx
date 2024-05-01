import { Drawer } from 'expo-router/drawer'
import { DrawerContent } from '~/components/DrawerContent'

import { CustomOptions } from '~/@types/navigation'
export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{ headerShown: false, drawerStyle: { width: '75%' } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: 'All boxes',
            iconName: 'all-inbox',
            hasDivider: true,
            notifications: 5,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="inbox"
        options={
          {
            title: 'Inbox',
            iconName: 'inbox',
            hasDivider: true,
            notifications: 3,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="stars"
        options={
          {
            title: 'Stars',
            iconName: 'star-outline',
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="postponed"
        options={
          {
            title: 'Postponed',
            iconName: 'schedule',
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: 'Important',
            iconName: 'label-important-outline',
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="sent"
        options={
          {
            title: 'Sent',
            iconName: 'send',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="programmed"
        options={
          {
            title: 'Programmed',
            iconName: 'schedule-send',
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: 'Exit Box',
            iconName: 'outbox',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="draft"
        options={
          {
            title: 'Draft',
            iconName: 'note',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: 'All Emails',
            iconName: 'email',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="spam"
        options={
          {
            title: 'Spam',
            iconName: 'info-outline',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: 'Trash',
            iconName: 'delete-outline',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="read"
        options={
          {
            title: 'Read',
            iconName: 'label-important-outline',
            sectionTitle: 'Markers',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="general"
        options={
          {
            title: 'General',
            iconName: 'label-important-outline',
            hasDivider: true,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="new-marker"
        options={
          {
            title: 'New Marker',
            iconName: 'add',
            hasDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: 'Configuration',
            iconName: 'settings',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="feedback"
        options={
          {
            title: 'Feedback',
            iconName: 'feedback',
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="help"
        options={
          {
            title: 'Help',
            iconName: 'help-outline',
          } as CustomOptions
        }
      />
    </Drawer>
  )
}
