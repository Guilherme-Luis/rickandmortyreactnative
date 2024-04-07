import {useNavigation} from '@react-navigation/native'
import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {theme} from '../../theme'
import {navigationProps} from '../../types'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation<navigationProps>()

  const handleLogin = () => {
    if (email.length > 0 && password.length > 0) {
      navigation.navigate('main')
    }
  }
  const handleRegister = () => {
    navigation.navigate('register')
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Password</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <View>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <View>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f9ff',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 300,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#0c4a6e',
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: theme.primary500,
    backgroundColor: '#e0f2fe',
  },
  buttonContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: theme.primary500,
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    color: theme.textOnPrimary,
  },
})
