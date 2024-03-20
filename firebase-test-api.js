const url = `https://testapi-53f08-default-rtdb.europe-west1.firebasedatabase.app/`

const requestOptions = {
    method: "GET"
}

fetch(url,requestOptions)
    .then((response)=>{
        console.log(response)
        response.json()
    })
    .then((fetched)=>{
        console.log(fetched)
    })