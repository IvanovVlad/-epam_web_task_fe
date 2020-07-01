export function signUp(login, password) {
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

    fetch("http://localhost:3000/auth/signup", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}\nНенадежный пароль`);
            }
            else {
                alert('Пользователь зарегестрирован')
            }
        })
        .catch(error => alert(error));
}