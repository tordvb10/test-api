let myHeaders = new Headers();
myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");

let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("/pet/findByStatus?status", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));