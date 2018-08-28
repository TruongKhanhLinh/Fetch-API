
function deleteData(item, url) {
    return fetch("http://localhost:3000/posts/2", {
      method: 'delete'
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }