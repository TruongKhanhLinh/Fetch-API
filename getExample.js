function getExample(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))
}
