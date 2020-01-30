const fetchApi = (url, method, body) => {
  if(method !== 'GET'){
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json());
  }

  return fetch(url)
    .then(res => res.json());
};

export default fetchApi;
