export async function getAllUsers(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      return fetch("http://localhost:3000/auth", requestOptions)
        .then(response => response.text())
        .catch(error => console.log('error', error));
}