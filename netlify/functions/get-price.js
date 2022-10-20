import fetch from 'node-fetch'

export const handler = async () => {
  const POKE_API = 'https://sandbox-checkout.paddle.com/api/2.0/prices?product_ids=33479'

  const response = await fetch(POKE_API)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}