import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Character} from './pages/Character'
import {Login} from './pages/Login'
import {Main} from './pages/Main'
import {Register} from './pages/Register'
import {theme} from './theme'

const Stack = createStackNavigator()

export default function Routes() {
  const defaultTitle = 'Rick and Morty'
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: 'LOGIN',
              headerTitleAlign: 'center',
              headerTintColor: theme.textOnPrimary,
              headerStyle: {
                backgroundColor: theme.primary500,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.textOnPrimary,
              },
            }}
          />
          <Stack.Screen
            name="main"
            component={Main as any}
            options={{
              title: defaultTitle,
              headerTitleAlign: 'center',
              headerTintColor: theme.textOnPrimary,
              headerLeft: undefined,
              headerStyle: {
                backgroundColor: theme.primary500,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.textOnPrimary,
              },
            }}
          />
          <Stack.Screen
            name="character"
            component={Character as any}
            options={{
              title: defaultTitle,
              headerTitleAlign: 'center',
              headerTintColor: theme.textOnPrimary,
              headerLeft: undefined,
              headerStyle: {
                backgroundColor: theme.primary500,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.textOnPrimary,
              },
            }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{
              title: 'REGISTER',
              headerTitleAlign: 'center',
              headerTintColor: theme.textOnPrimary,
              headerLeft: undefined,
              headerStyle: {
                backgroundColor: theme.primary500,
              },
              headerTitleStyle: {
                fontWeight: 'bold',
                color: theme.textOnPrimary,
              },
            }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}
