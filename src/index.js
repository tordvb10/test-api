//const express = require('express')
//const app = express()
//const port = 3000
//curl --location --request GET '' \
//--header 'User-Agent: Apidog/1.0.0 (https://apidog.com)'

//curl --location --request GET '/' \
//--header 'User-Agent: Apidog/1.0.0 (https://apidog.com)'
//const url = `https://app.apidog.com/project/482303`

//app.get(url, (req, res) => {
  //  console.log(req)
    //res.send([{
      //  id: "12345678901",
        //FistName: "Ola",
        //LastName: "Nordmann"
//    },
  //  {
    //    id: "12345678901",
      //  FistName: "Nora",
        //LastName: "Norddame"
//    }
//]);
//});
//app.get(`${url}/children`, (req, res) => {
  //  console.log(req)
    //res.send([{
      //  id: "12345678901",
        //FistName: "Tore",
//        LastName: "Nordgutt"
  //  },
    //{
      //  id: "12345678901",
        //FistName: "Thea",
    //    LastName: "Nordjente"
    //}
//]);
//});




console.log("hello world")
//app.post("/", (req, res) => {
  //  console.log(req)
    //res.send();
//});


//app.listen(port, () => {
  //  console.log(`It's alive on http://localhost:${port}`)
//})



const localhostfetch = async (input = "") => {
    try {
        console.log(url)
        const response = await fetch(url+input)
        console.log(response)
        const fetched = await response.json()
        console.log(fetched)
    } catch (error){
        console.log("It's an error!")
        console.log(error)
    }
}

localhostfetch()
//localhostfetch("/children")

