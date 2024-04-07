import React from 'react'
import {Text} from 'react-native'
import {InputLabel} from '../../components/InputLabel'
import {
  ActionsContainer,
  CancelActionButton,
  CancelActionButtonText,
  Container,
  FormContainer,
  SaveActionButton,
  SaveActionButtonText,
} from './styles'

export const Register = () => {
  return (
    <Container>
      <FormContainer>
        <InputLabel
          label="Nome"
          placeholder="Nome"
          onChangeText={() => {}}
          value="Nome"
        />
        <InputLabel
          label="Telefone"
          placeholder="Telefone"
          onChangeText={() => {}}
          value="Telefone"
        />
        <InputLabel
          label="CPF"
          placeholder="CPF"
          onChangeText={() => {}}
          value="CPF"
        />
        <InputLabel
          label="Email"
          placeholder="Email"
          onChangeText={() => {}}
          value="Email"
        />
        <InputLabel
          label="Curso"
          placeholder="Curso"
          onChangeText={() => {}}
          value="Curso"
        />

        <ActionsContainer>
          <CancelActionButton>
            <CancelActionButtonText>Cancelar</CancelActionButtonText>
          </CancelActionButton>
          <SaveActionButton>
            <SaveActionButtonText>Salvar</SaveActionButtonText>
          </SaveActionButton>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
