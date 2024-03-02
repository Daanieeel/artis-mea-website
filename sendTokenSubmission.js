async function sendTokenSubmission(name, token) {
  const url = 'http://localhost:3000/redeem-token';
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

    if(err.statusCode === 400) {
      const errorResponse = await err.json();
      return { error: errorResponse.type };
    }

    if(err.statusCode === 500) {
      return null;
    }
  }
}