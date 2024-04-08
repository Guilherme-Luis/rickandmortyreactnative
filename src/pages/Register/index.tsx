import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {Alert, Text} from 'react-native'
import {InputLabel} from '../../components/InputLabel'
import {navigationProps} from '../../types'
import {
  ActionsContainer,
  CancelActionButton,
  CancelActionButtonText,
  Container,
  FormContainer,
  SaveActionButton,
  SaveActionButtonText,
} from './styles'
import { StyleSheet } from 'react-native';

export const Register = () => {

  const navigation = useNavigation<navigationProps>()
  const handleMainCancel = () => {
    navigation.navigate('login')
  }
  const handleMain = () => {
    Alert.alert('Usuário Cadastrado com sucesso!')
    navigation.navigate('login')
  }

  return (
    <Container>
      <FormContainer>
        <InputLabel
          label="Nome"
          placeholder="Nome"
          onChangeText={() => {}}
          //value="Nome"
        />
        <InputLabel
          label="Telefone"
          placeholder="Telefone"
          onChangeText={() => {}}
          //value="Telefone"
        />
        <InputLabel
          label="CPF"
          placeholder="CPF"
          onChangeText={() => {}}
          //value="CPF"
        />
        <InputLabel
          label="Email"
          placeholder="Email"
          onChangeText={() => {}}
          //value="Email"
        />
        <InputLabel
          label="Curso"
          placeholder="Curso"
          onChangeText={() => {}}
          //value="Curso"
        />

        <ActionsContainer>
          <CancelActionButton>
            <CancelActionButtonText onPress={handleMainCancel} style={styles.RoundedButton}>
              Cancelar
            </CancelActionButtonText>
          </CancelActionButton>
          <SaveActionButton>
            <SaveActionButtonText onPress={handleMain} style={styles.RoundedButton}>
              Salvar
            </SaveActionButtonText>
          </SaveActionButton>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
const styles = StyleSheet.create({
  RoundedButton: {
    borderRadius: 5
  }
})
