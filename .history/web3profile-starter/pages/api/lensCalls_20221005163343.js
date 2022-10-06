import { createClient } from 'urql'

const APIURL = 'https://api-mumbai.lens.dev/';

export const urqlClient= new createClient({
  url: APIURL,
})
 