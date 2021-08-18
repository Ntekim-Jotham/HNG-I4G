
const { response } = require('express');
const express = require('express');
// const path = require('path');
const open = require('open');
// const bodyParser = require("body-parser");
const port = 3000; 
const host = 'http://localhost:' + port;


let app = express();

app.use( express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/contact', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;
    console.log("User name is " + name + "," + "Email is " + email + "," + "Subject is " + subject + "," + "Message is " + message + "!");
    res.end("yes");  
})


app.listen(port, (err)=> {
   if(err){
       console.log(err);
   }else{
       open(host);
   }
});