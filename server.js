// Dependencies
const cors = require('cors');
const express = require('express');
const fs = require('fs');
const path = require('path');
const open = require('open');
const validator = require('email-validator');
const port = 3000;
const host = "http://localhost:" + port;


let app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/public/index.html");
});

let baseDir = path.join(__dirname,  '/../HNG-I4G/.data/data.json');
app.post('/contact', (req, res) => {
    let name = typeof(req.body.name) == 'string' && req.body.name.trim().length > 0 ? req.body.name.trim() : false;;
    let email = validator.validate(req.body.email);
    let subject = typeof(req.body.subject) == 'string' && req.body.subject.trim().length > 0 ? req.body.subject.trim() : false;;
    let message = typeof(req.body.message) == 'string' && req.body.message.trim().length > 0 ? req.body.message.trim() : false;
    
    
    if (name && email && subject && message) {
        let userData = {
            'name' : name,
            'email' : req.body.email,
            'subject' : subject,
            'message' : message
        };
        fs.open(baseDir, 'w', (err, fileDescriptor) => {
            if(!err && fileDescriptor){
                

                let stringData = JSON.stringify(userData);

                fs.writeFile(fileDescriptor, stringData, err => {
                    if (err) {
                    console.log(err)
                    }else{
                      //file written successfully
                      fs.close(fileDescriptor, (err) => {
                        console.log('Wrote the file successfully');
                        // console.log(stringData);
                        res.redirect('back'); 
                      });
                    
                    }
                    
                })
            
            }
            else{
                console.log('Could not open file' + err);
            }

        });
    }
    
})


app.listen(3000, (err)=> {
   if(err){
       console.log(err);
   }else{
       open(host);
   }
});