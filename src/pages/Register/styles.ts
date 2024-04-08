import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  gap: 20px;
`
export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 20px;
`

export const CancelActionButton = styled(RectButton)`
  background-color: ${props => props.theme.error500};
  padding: 10px;
`

export const CancelActionButtonText = styled.Text`
  color: ${props => props.theme.textOnError};

`

export const SaveActionButton = styled(RectButton)`
  background-color: ${props => props.theme.primary500};
  padding: 10px;
`

export const SaveActionButtonText = styled.Text`
  color: ${props => props.theme.textOnPrimary};
`
