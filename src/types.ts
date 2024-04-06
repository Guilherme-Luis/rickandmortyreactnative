import { NavigationProp } from '@react-navigation/native'

export  type navigationProps = NavigationProp<{
  main: undefined
}>

export type User = {
  name: string
  login: string
  bio: string
  avatar: string
}