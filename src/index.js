const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send({
        id: "12345678901",
        FistName: "Ola",
        LastName: "Nordmann"
    });
});


app.post("/", (req, res) => {
    res.send({
        id: "12345678901",
        FistName: "Nora",
        LastName: "Norddame"
    });
});


app.listen(port, () => {
    console.log(`It's alive on http://localhost:${port}`)
})