import { FC } from 'react'
import { Image, ImageProps } from 'react-native'

import { cn } from '~/utils/cn'

type AvatarProps = ImageProps & {
  size?: 'small' | 'medium'
}
export const Avatar: FC<AvatarProps> = ({
  className,
  alt,
  size = 'medium',
  ...rest
}) => {
  return (
    <Image
      className={cn([
        'rounded-full',
        className,
        size === 'small' ? 'size-8' : 'size-10',
      ])}
      alt={alt}
      {...rest}
    />
  )
}
