import fetch from 'node-fetch'

export const handler = async (event, context) => {

  console.log({event}, {context})
  const eventBody = JSON.parse(event.body)
  const POKE_API = 'https://sandbox-checkout.paddle.com/api/2.0/prices?product_ids=' + eventBody.product_ids

  const response = await fetch(POKE_API)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}