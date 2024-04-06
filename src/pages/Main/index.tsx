import React, {Component} from 'react'
import {Text} from 'react-native'
import {Container} from './styles'

export class Main extends Component<{
  navigation: {navigate: (screen: string, params?: any) => void}
}> {
  async componentDidMount() {}

  componentDidUpdate(_, prevState) {}

  render() {
    return (
      <Container>
        <Text>Main</Text>
      </Container>
    )
  }
}
