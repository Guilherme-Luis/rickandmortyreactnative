import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: '#fff';
`

export const Form = styled.View`
  display: flex;
  flex-direction: row;
`

export const Input = styled.TextInput`
  flex: 1;
  border: ${props => props.theme.primary400} 1px solid;
  border-radius: 5px;
  padding: 8px 16px;
`

export const SubmitButton = styled(RectButton)`
  background-color: ${props => props.theme.primary400};
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  padding: 0 12px;
  color: white;

  :disabled {
    opacity: 0.5;
  }
`

export const CharacterList = styled.FlatList`
  margin-top: 16px;
`

export const Character = styled.View`
  width: 100%;
`

export const CharacterImageContainer = styled.View``

export const CharacterImage = styled.Image`
  height: 100px;
`

export const CharacterInfoContainer = styled.View``

export const CharacterName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const CharacterStatus = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`

export const CharacterInfoLabel = styled.Text`
  font-weight: bold;
`

export const CharacterInfo = styled.Text`
  color: ${props => props.theme.textSecondary};
`
