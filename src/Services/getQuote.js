import axios from 'axios'

export async function getQuote() {
  try {
    const res = await axios.get('https://dummyjson.com/quotes/random')
    return res.data
  } catch (e) {
    console.log(e)
  }
}
