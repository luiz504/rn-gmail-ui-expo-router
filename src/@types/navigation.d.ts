import { DrawerNavigationOptions } from '@react-navigation/drawer'
import { IconNameProps } from '~/components/DrawerButton'

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameProps
  hasDivider?: boolean
  notifications?: number
  sectionTitle?: string
}
