async function sendTokenSubmission(name, token) {
  const url = 'http://localhost:3000/redeem-token'; //TODO replace
  const data = {
    name, token
  };

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}