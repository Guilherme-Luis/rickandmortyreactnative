import { NavigationProp } from '@react-navigation/native'

export  type navigationProps = NavigationProp<{
  main: undefined
  register: undefined
  login: undefined
}>

export type User = {
  name: string
  login: string
  bio: string
  avatar: string
}