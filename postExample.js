function postRequest(url, data) {
  return fetch('http://localhost:3000/posts', {
    method: 'POST', // Thêm 
    body: JSON.stringify({userId: '1'}),
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
  .then(response => response.json())
}