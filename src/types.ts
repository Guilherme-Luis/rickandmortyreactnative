import { NavigationProp } from '@react-navigation/native'

export  type navigationProps = NavigationProp<{
  main: undefined
  register: undefined
  login: undefined
  character: Character
}>

export type User = {
  name: string
  login: string
  bio: string
  avatar: string
}

export type Character = {
  image: string
  name: string
  status: string
  lastLocation: string
  firstSeenIn: number
}
