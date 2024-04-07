import React, {Component} from 'react'
import {Alert, StyleSheet} from 'react-native'
// import { Icon } from 'react-native-vector-icons/Icon'
import {rickymortyApi} from '../../services/rickymortyApi'
import {
  Character,
  CharacterImage,
  CharacterImageContainer,
  CharacterInfoContainer,
  CharacterInfoLabel,
  CharacterList,
  CharacterName,
  CharacterStatus,
  Container,
  Form,
  Input,
  SubmitButton,
} from './styles'

type Character = {
  image: string
  name: string
  status: string
  lastLocation: string
  firstSeenIn: number
}
type State = {
  newCharacter: string
  characters: Character[]
  loading: boolean
}

export class Main extends Component<{
  navigation: {navigate: (screen: string, params?: any) => void}
}> {
  state: Readonly<State> = {
    newCharacter: '',
    characters: [],
    loading: false,
  }

  async componentDidMount() {}

  //

  render() {
    const {loading} = this.state

    const fetchCharacters = async (character: string) => {
      const {data} = await rickymortyApi.get(`/character/?name=${character}`)

      const result = data.results[0]
      return {
        image: result.image,
        name: result.name,
        status: result.status,
        lastLocation: result.location.name,
        firstSeenIn: result.episode[0].split('/').pop(),
      }
    }

    const handleAddCharacter = async () => {
      try {
        this.setState({...this.state, loading: true})
        const character = await fetchCharacters(this.state.newCharacter)
        this.setState({
          ...this.state,
          characters: [...this.state.characters, character],
          newCharacter: '',
          loading: false,
        })
      } catch (error) {
        Alert.alert('Erro', 'Erro ao adicionar personagem')
        this.setState({...this.state, loading: false})
      }
    }

    return (
      <Container>
        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicione usuario..."
            value={this.state.newCharacter}
            onChange={text =>
              this.setState({
                ...this.state,
                newCharacter: text.nativeEvent.text,
              })
            }
            returnKeyType="send"
            onSubmitEditing={handleAddCharacter}
          />

          <SubmitButton
            style={styles.SubmitButton}
            onPress={handleAddCharacter}>
            {/* {loading ? (
              <ActivityIndicator color={'#fff'} />
            ) : (
              <Icon name="add" size={20} color={theme.textOnPrimary} />
            )} */}
          </SubmitButton>
        </Form>
        <CharacterList
          data={this.state.characters}
          keyExtractor={item => (item as unknown as Character).name}
          renderItem={({item}) => <CharacterCard item={item as any} />}
        />
      </Container>
    )
  }
}

const CharacterCard = ({item}: {item: Character}) => (
  <Character>
    <CharacterImageContainer>
      <CharacterImage source={{uri: item.image}} />
    </CharacterImageContainer>
    <CharacterInfoContainer>
      <CharacterName>{item.name}</CharacterName>
      <CharacterStatus>{item.status}</CharacterStatus>
      <CharacterInfoLabel>Ultima localização conhecida</CharacterInfoLabel>
      <CharacterStatus>{item.lastLocation}</CharacterStatus>
      <CharacterInfoLabel>Primeira aparição</CharacterInfoLabel>
      <CharacterStatus>Episodio {item.firstSeenIn}</CharacterStatus>
    </CharacterInfoContainer>
  </Character>
)

const styles = StyleSheet.create({
  SubmitButton: {
    borderRadius: 5,
  },
})
