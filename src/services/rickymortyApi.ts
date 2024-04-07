import axios from 'axios'

export const rickymortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',

})
