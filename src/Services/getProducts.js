import axios from 'axios'

export async function getProducts() {
  try {
    const res = await axios.get('https://dummyjson.com/products?limit=0')
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export async function getCategories(category) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export async function getProduct(id) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    console.log(res.data);
    return res.data
  } catch (e) {
    console.log(e)
  }
}
