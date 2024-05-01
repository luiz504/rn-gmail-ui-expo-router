import { ComponentProps, FC } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import { COLORS } from '~/styles'
import { cn } from '~/utils/cn'

type InputProps = ComponentProps<typeof View>
const Input = ({ children, className, ...rest }: InputProps) => {
  return (
    <View
      className={cn([
        'w-full h-14 bg-gray-800 rounded-lg p-4 items-center gap-4 flex-row',
        className,
      ])}
      {...rest}
    >
      {children}
    </View>
  )
}

const InputField: FC<TextInputProps> = ({ className, ...rest }) => {
  return (
    <TextInput
      className={cn(['flex-1 font-normal text-base text-white', className])}
      placeholderTextColor={COLORS.gray[400]}
      cursorColor={COLORS.blue[600]}
      {...rest}
    />
  )
}

Input.Field = InputField
export { Input }
