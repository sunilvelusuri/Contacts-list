const express = require("express");
const path = require('path');
const port=7000;

const app=express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList =[
    {
        name : "Sunilkumar",
        phone: "9923567643"
    },
    {
        name  :'pavan',
        phone :'9737645172'
    },
    {
        name  :'harun',
        phone :'9848012956',
    }
]

app.get('/',(req,res)=>{
    return res.render('home',{
        title        : "Home page",
        contact_List : contactList
    });
});

app.post('/create-contact',(req,res)=>{
    // console.log(req.body);
    contactList.push(req.body);
    // console.log(contactList);
    return res.redirect('back');
});


// STRING PARAM
// app.get('/delete-contact/:phone',(req,res)=>{
//     // console.log(req.params.phone);
//     let mobile=req.params.phone;
//     console.log(mobile);
//     let contactIndex = contactList.findIndex(contact => contact.phone == mobile);
//     if(contactIndex != -1){
//         contactList.splice(contactIndex,1);
//     }
//     return(res.redirect('back'));
// })

// QUERY params

app.get('/delete-contact/',(req,res)=>{
    let mobile=req.query.mobile;
    console.log(mobile);
    let contactIndex = contactList.findIndex(contact => contact.phone == mobile);
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }
    return(res.redirect('back'));
})

app.listen(port,(err)=>{
    if(err){
        console.log("Error",err);
    }
    console.log("My server is running on port : ",port);
});


