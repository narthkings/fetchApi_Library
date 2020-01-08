class AcuteFetch {
  async get(url) {
    const res = await fetch(url);
    const req = await res.json();
    return req;
  }

  async post(url, data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const res = await fetch(url, options);
    const req = await res.json();
    return req;
  }

  async put(url, data) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const res = await fetch(url, options);
    const req = await res.json();
    return req;
  }

  async del(url) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    };
    const res = await fetch(url, options);
    const req = await res.json();
    return req;
  }
}
