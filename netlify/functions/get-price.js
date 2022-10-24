import fetch from 'node-fetch'

function createURL({ ...rest }) {
  let url = 'https://sandbox-checkout.paddle.com/api/2.0/prices';
  let param = new URLSearchParams(getEntries(rest)).toString();
  if (param)
    url += "?" + param;
  return url
}

function getEntries(o = {}) {
  const entries = [];
  for (const [k, v] of Object.entries(o)) {
    if (Array.isArray(v))
      entries.push(...v.flatMap(getEntries))
    else if (typeof v === 'object')
      entries.push(...getEntries(v))
    else entries.push([k, v])
  }
  return entries;
}


export const handler = async (event, context) => {
  console.log({event}, {context})
  console.log('process.env.VENDOR_ID', process.env.VENDOR_ID)
  console.log('process.env.VENDOR_AUTH_CODE', process.env.VENDOR_AUTH_CODE)
  const eventBody = JSON.parse(event.body)
  console.log(JSON.stringify(eventBody))
  const url = createURL (eventBody);
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}