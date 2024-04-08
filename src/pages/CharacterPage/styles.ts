import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`


export const Character = styled.View`
  border: solid 2px ${props => props.theme.primary500};
  border-radius: 20px;
  overflow: hidden;
`

export const CharacterImageContainer = styled.View`
  height: 300px;
`

export const CharacterImage = styled.Image`
  height: 100%;
  object-fit: cover;
`

export const CharacterInfoContainer = styled.View`
  margin-top: 8px;
  flex: 1;
  padding: 8px;
`

export const CharacterName = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.primary500};
  font-weight: bold;
`

export const CharacterStatus = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.textSecondary};
`

export const CharacterInfoLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
  color: ${props => props.theme.primary500};
`

export const CharacterInfo = styled.Text`
  color: ${props => props.theme.textSecondary};
`
