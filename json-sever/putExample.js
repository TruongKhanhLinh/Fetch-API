
function handleOnclickPutExample(){
    update({
        title: "hello, Im Truong Khanh Linh"
    });
    
}

function update(data) {
    return fetch('http://localhost:3000/posts/1', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(checkStatus)
      .then(()=>console.log('updated!!!'))
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }