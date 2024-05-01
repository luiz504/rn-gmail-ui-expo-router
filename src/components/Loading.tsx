import { ComponentProps, FC } from 'react'
import { ActivityIndicator } from 'react-native'
import { cn } from '~/utils/cn'

type Props = ComponentProps<typeof ActivityIndicator>
export const Loading: FC<Props> = ({ className, ...rest }) => {
  return (
    <ActivityIndicator
      className={cn(['flex-1 bg-gray-900', className])}
      size={40}
      color={'white'}
      {...rest}
    />
  )
}
