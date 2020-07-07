export function signIn(login, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("login", login);
    urlencoded.append("password", password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/auth/signin", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                throw new Error(result.message);
            } else {
                success(result.username);
            }
        })
        .catch(error => alert(error));
}

function success(username) {
    document.querySelector('#login-text').disabled = true;
    document.querySelector('#password-text').disabled = true;
    alert(`Привет ${username}`);
}
