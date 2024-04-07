import React from 'react'
import {TextInputIOSProps} from 'react-native'
import {Container, Input, Label} from './styles'

type InputLabelProps = {
  label: string
  placeholder: string
  value?: string
  textContentType?: TextInputIOSProps['textContentType']
  onChangeText: (value: string) => void
}

export const InputLabel = ({
  label,
  placeholder,
  value,
  textContentType,
  onChangeText,
}: InputLabelProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        textContentType={textContentType}
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  )
}
