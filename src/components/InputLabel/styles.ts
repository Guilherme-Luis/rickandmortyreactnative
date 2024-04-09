import styled from 'styled-components/native'

export const Container = styled.View``

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.primary500};
`

export const Input = styled.TextInput`
  background-color: ${props => props.theme.background};
  padding: 10px;
  border-radius: 5px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px;
  borderColor: ${props => props.theme.primary500};
`
