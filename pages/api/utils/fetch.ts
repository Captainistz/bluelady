const fetchData = async (body: any) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT + '/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.log(String(e))
    return e
  }
}

export default fetchData
