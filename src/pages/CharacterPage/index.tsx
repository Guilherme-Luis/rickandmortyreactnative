import React, { Component } from 'react'
import { Character } from '../../types'
import {
  CharacterImage,
  CharacterImageContainer,
  CharacterInfoContainer,
  CharacterInfoLabel,
  CharacterName,
  CharacterStatus,
  Container,
} from './styles'

export class CharacterPage extends Component {
  async componentDidMount() {}

  render() {
    const {route} = this.props as any
    const {character} = route.params as {character: Character}
    
    return (
      <Container>
        <CharacterImageContainer>
          <CharacterImage source={{uri: character.image}} />
        </CharacterImageContainer>
        <CharacterInfoContainer>
          <CharacterName>{character.name}</CharacterName>
          <CharacterStatus>{character.status}</CharacterStatus>
          <CharacterInfoLabel>Ultima localização conhecida:</CharacterInfoLabel>
          <CharacterStatus>{character.lastLocation}</CharacterStatus>
          <CharacterInfoLabel>Origem:</CharacterInfoLabel>
          <CharacterStatus>{character.origin}</CharacterStatus>
          <CharacterInfoLabel>Primeira aparição:</CharacterInfoLabel>
          <CharacterStatus>Episodio {character.firstSeenIn}</CharacterStatus>
          <CharacterInfoLabel>Episodios:</CharacterInfoLabel>
          <CharacterStatus>{character.episodes.join(', ')}</CharacterStatus>
        </CharacterInfoContainer>
      </Container>
    )
  }
}
